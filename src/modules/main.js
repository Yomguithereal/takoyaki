/**
 * Takoyaki Main Module
 * =====================
 *
 * Top-level module.
 */
import CSV from 'papaparse';
import Immutable from 'immutable';
import MultiSet from 'mnemonist/multi-set';
import sortBy from 'lodash/sortBy';
import {saveAs} from 'file-saver';
import naiveSample from 'pandemonium/naive-sample';
import {createSelector} from 'reselect';
import {createReducer} from './helpers';
import {sortedRecipes} from '../definitions/helpers';
import CLUSTERERS from '../definitions/clusterers';
import ClusteringWorker from '../workers/clustering.worker.js';

import {GLOBAL_RESET} from './global';

/**
 * Constants.
 */
const MAIN_CHANGE_STEP = '§Main/ChangeStep';
const MAIN_PARSING = '§Main/Parsing';
const MAIN_PARSED = '§Main/Parsed';
const MAIN_SELECT_HEADER = '§Main/SelectHeader';
const MAIN_SELECT_RECIPE = '§Main/SelectRecipe';
const MAIN_CLUSTERING = '§Main/Clustering';
const MAIN_CLUSTERED = '§Main/Clustered';
const MAIN_CANCEL_CLUSTERING = '§Main/CancelClustering';
const MAIN_UPDATE_HARMONIZED_VALUE = '§Main/UpdateHarmonizedValue';
const MAIN_HARMONIZE_CLUSTER = '§Main/HarmonizeCluster';
const MAIN_DROP_CLUSTER = '§Main/DropCluster';
const MAIN_SORT_CLUSTERS = '§Main/SortClusters';
const MAIN_REMOVE_VALUE_FROM_CLUSTER = '§Main/RemoveValueFromCluster';
const MAIN_RESAMPLE_PREPROCESSING = '§Main/ResamplePreprocessing';
const MAIN_RESAMPLE_METRIC = '§Main/ResampleMetric';
const MAIN_EXPLORE = '§Main/Explore';

const SAMPLE_SIZE = 20;

const SORT = {
  number: cluster => cluster.key,
  values: cluster => cluster.groups.length,
  rows: cluster => cluster.nbRows
};

let CLUSTERING_WORKER = new ClusteringWorker();

/**
 * Default state.
 */
const DEFAULT_STATE = {
  step: 'upload',
  data: null,
  values: null,
  headers: null,
  delimiter: ',',
  selectedHeader: null,
  selectedRecipe: 'fingerprint',
  clustering: false,
  clusters: null,
  clustersSorting: {
    order: 'asc',
    by: 'number'
  },
  clusteredHeader: null,
  clusteredRecipe: null,
  exploredCluster: null,
  preprocessingSample: null,
  metricSample: null
};

/**
 * Selectors.
 */
export const selectors = {

  // Get data from the selected recipe
  selectedRecipeData(state) {
    const recipes = state.recipes;

    return recipes.recipes[state.main.selectedRecipe];
  },

  // Get data from the clustered recipe
  clusteredRecipeData(state) {
    const recipes = state.recipes;

    return recipes.recipes[state.main.clusteredRecipe];
  },

  // Getting the next recipe
  nextRecipeData(state) {
    const recipes = sortedRecipes(state.recipes.recipes),
          currentRecipe = state.main.clusteredRecipe;

    const index = recipes.findIndex(recipe => recipe.id === currentRecipe);

    if (index === -1 || index >= recipes.length - 1)
      return;

    return recipes[index + 1];
  },

  // Extract the values to cluster
  valuesToCluster(state) {
    const {
      data,
      selectedHeader
    } = state.main;

    const values = new Array(data.length);

    for (let i = 0, l = data.length; i < l; i++)
      values[i] = data[i][selectedHeader];

    return values;
  },

  // Get the number of distinct values from the selected column
  nbDistinctSelectedValues: createSelector(
    state => state.main.selectedHeader,
    state => state.main.values,
    (header, values) => {
      if (!header || !values)
        return null;

      return values[header].dimension;
    }
  )
};

// Get the approx nb of computations to apply the chosen clusterer
selectors.estimate = createSelector(
  selectors.selectedRecipeData,
  selectors.nbDistinctSelectedValues,
  (recipe, nb) => {
    if (!recipe || nb === null)
      return;

    const clustererDefinition = CLUSTERERS[recipe.clusterer];

    return clustererDefinition.estimate(nb);
  }
);

/**
 * Main reducer.
 */
export default createReducer(DEFAULT_STATE, {
  [MAIN_CHANGE_STEP](state, action) {
    if (action.step === 'exploration' && !state.exploredCluster)
      return {
        ...state,
        step: action.step,
        exploredCluster: 0
      };

    return {
      ...state,
      step: action.step
    };
  },

  [MAIN_PARSING](state) {
    return {
      ...state,
      parsing: true
    };
  },

  [MAIN_PARSED](state, action) {
    const size = action.data.length;

    // Computing samples
    const preprocessingSample = naiveSample(SAMPLE_SIZE, size),
          metricSample = [
            naiveSample(SAMPLE_SIZE, size),
            naiveSample(SAMPLE_SIZE, size)
          ];

    const {
      data,
      headers
    } = action;

    const values = {};

    // Grabbing unique values
    for (let i = 0, l = headers.length; i < l; i++) {
      const header = headers[i];

      const set = new MultiSet();

      for (let j = 0, m = data.length; j < m; j++)
        set.add(data[j][header]);

      values[header] = Array.from(set.multiplicities());
      values[header] = sortBy(values[header], [
        v => -v[1],
        v => v[0]
      ]);
    }

    return {
      ...state,
      parsing: false,
      data,
      headers,
      values,
      delimiter: action.delimiter,
      step: 'main',
      preprocessingSample,
      metricSample
    };
  },

  [MAIN_RESAMPLE_PREPROCESSING](state) {
    const preprocessingSample = naiveSample(SAMPLE_SIZE, state.data.length);

    return {
      ...state,
      preprocessingSample
    };
  },

  [MAIN_RESAMPLE_METRIC](state) {
    const size = state.data.length;

    const metricSample = [
      naiveSample(SAMPLE_SIZE, size),
      naiveSample(SAMPLE_SIZE, size)
    ];

    return {
      ...state,
      metricSample
    };
  },

  [MAIN_SELECT_HEADER](state, action) {
    return {
      ...state,
      selectedHeader: action.header
    };
  },

  [MAIN_SELECT_RECIPE](state, action) {
    return {
      ...state,
      selectedRecipe: action.recipe
    };
  },

  [MAIN_CLUSTERING](state, action) {
    return {
      ...state,
      clustering: true,
      clusters: null,
      clusteredHeader: action.header,
      clusteredRecipe: action.recipe
    };
  },

  [MAIN_CLUSTERED](state, action) {
    return {
      ...state,
      clustering: false,
      step: 'clusters',
      clusters: action.clusters,
      clustersSorting: {
        order: 'asc',
        by: 'number'
      }
    };
  },

  [MAIN_CANCEL_CLUSTERING](state) {
    return {
      ...state,
      clustering: false,
      clusteredRecipe: null
    };
  },

  [MAIN_UPDATE_HARMONIZED_VALUE](state, action) {

    // TODO: try mutating?
    const cluster = state.clusters.get(action.cluster);
    const newClusters = state.clusters.set(action.cluster, {
      ...cluster,
      harmonizedValue: action.value
    });

    return {
      ...state,
      clusters: newClusters
    };
  },

  [MAIN_HARMONIZE_CLUSTER](state, action) {
    const harmonizedCluster = state.clusters.get(action.cluster);

    const newClusters = state.clusters.delete(action.cluster);

    // Updating data
    harmonizedCluster.groups.forEach(group => {

      // NOTE: here, we are mutating
      group.rows.forEach(row => {
        state.data[row][state.clusteredHeader] = harmonizedCluster.harmonizedValue;
      });
    });

    return {
      ...state,
      clusters: newClusters
    };
  },

  [MAIN_DROP_CLUSTER](state, action) {
    const newClusters = state.clusters.delete(action.cluster);

    return {
      ...state,
      clusters: newClusters
    };
  },

  [MAIN_SORT_CLUSTERS](state, action) {
    const order = action.order === 'asc' ? 1 : -1,
          sorter = SORT[action.by];

    const newClusters = state.clusters.sortBy(cluster => {
      return sorter(cluster) * order;
    });

    return {
      ...state,
      clusters: newClusters,
      clustersSorting: {
        order: action.order,
        by: action.by
      }
    };
  },

  [MAIN_REMOVE_VALUE_FROM_CLUSTER](state, action) {
    let cluster = state.clusters.get(action.cluster);

    // If the cluster has only 2 values, we drop it
    if (cluster.groups.length <= 2) {
      return {
        ...state,
        clusters: state.clusters.delete(action.cluster)
      };
    }

    cluster = {
      ...cluster,
      groups: cluster.groups.slice()
    };

    cluster.groups.splice(action.group, 1);

    const newClusters = state.clusters.set(action.cluster, cluster);

    return {
      ...state,
      clusters: newClusters
    };
  },

  [MAIN_EXPLORE](state, action) {
    return {
      ...state,
      exploredCluster: action.cluster,
      step: 'exploration'
    };
  },

  [GLOBAL_RESET]() {
    return DEFAULT_STATE;
  }
});

/**
 * Actions.
 */
export const actions = {

  // Changing the current step
  changeStep(step) {
    return {type: MAIN_CHANGE_STEP, step};
  },

  // Parsing the whole data
  parseData(file) {
    return dispatch => {
      dispatch({type: MAIN_PARSING});

      return CSV.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete(results) {
          return dispatch({
            type: MAIN_PARSED,
            data: results.data,
            headers: results.meta.fields,
            delimiter: results.meta.delimiter
          });
        }
      });
    };
  },

  // Resample preprocessing data
  resamplePreprocessing() {
    return {type: MAIN_RESAMPLE_PREPROCESSING};
  },

  // Resample metric data
  resampleMetric() {
    return {type: MAIN_RESAMPLE_METRIC};
  },

  // Selecting a header to work with
  selectHeader(header) {
    return {type: MAIN_SELECT_HEADER, header};
  },

  // Selecting the clustering recipe to apply
  selectRecipe(recipe) {
    return {type: MAIN_SELECT_RECIPE, recipe};
  },

  // Running a clusterer
  runRecipe() {
    return (dispatch, getState) => {

      // First we need to cancel an ongoing clustering
      CLUSTERING_WORKER.onmessage = Function.prototype;
      CLUSTERING_WORKER.terminate();
      CLUSTERING_WORKER = new ClusteringWorker();

      // Then we need to actually perform the clustering
      const state = getState();

      const recipe = selectors.selectedRecipeData(state),
            values = selectors.valuesToCluster(state),
            header = state.main.selectedHeader;

      dispatch({type: MAIN_CLUSTERING, recipe: recipe.id, header});

      // Hooking on response
      CLUSTERING_WORKER.onmessage = message => {
        const {clusters} = message.data;

        return dispatch({
          type: MAIN_CLUSTERED,
          clusters: new Immutable.List(clusters)
        });
      };

      // Asking worker to perform task
      // TODO: row multimap should be built here to avoid copying too much
      // data to the worker
      CLUSTERING_WORKER.postMessage({recipe, values});
    };
  },

  // Cancelling the current clustering task if it takes too long
  cancel() {
    return dispatch => {
      CLUSTERING_WORKER.onmessage = Function.prototype;
      CLUSTERING_WORKER.terminate();
      CLUSTERING_WORKER = new ClusteringWorker();

      dispatch({type: MAIN_CANCEL_CLUSTERING});
    };
  },

  // Updating harmonized value for a cluster
  updateHarmonizedValue(cluster, value) {
    return {type: MAIN_UPDATE_HARMONIZED_VALUE, cluster, value};
  },

  // Harmonizing a cluster
  harmonizeCluster(cluster) {
    return {type: MAIN_HARMONIZE_CLUSTER, cluster};
  },

  // Dropping an irrelevant cluster
  dropCluster(cluster) {
    return {type: MAIN_DROP_CLUSTER, cluster};
  },

  // Removing a value from a cluster
  removeValueFromCluster(cluster, group) {
    return {type: MAIN_REMOVE_VALUE_FROM_CLUSTER, cluster, group};
  },

  // Sorting the clusters
  sortClusters(by, order = 'desc') {
    return {type: MAIN_SORT_CLUSTERS, by, order};
  },

  // Exploring a cluster
  explore(cluster) {
    return {type: MAIN_EXPLORE, cluster};
  },

  // Downloading the corrected file back
  download() {
    return (dispatch, getState) => {
      const main = getState().main;

      const csvString = CSV.unparse(main.data, {
        delimiter: main.delimiter,
        newline: '\n'
      });

      // TODO: might need to improve performance here some day
      const file = new File(
        [csvString],
        'harmonized-data.csv',
        {type: 'text/csv;charset=utf-8'}
      );

      saveAs(file);
    };
  }
};
