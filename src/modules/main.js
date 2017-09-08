/**
 * Takoyaki Main Module
 * =====================
 *
 * Top-level module.
 */
import CSV from 'papaparse';
import {createReducer} from './helpers';
import ClusteringWorker from '../workers/clustering.worker.js';

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

const CLUSTERING_WORKER = new ClusteringWorker();

/**
 * Default state.
 */
const DEFAULT_STATE = {
  step: 'upload',
  data: null,
  headers: null,
  selectedHeader: null,
  selectedRecipe: 'fingerprint',
  clustering: false,
  clusters: null,
  clusteredHeader: null
};

/**
 * Selectors.
 */
export const selectors = {
  recipeData(state) {
    const recipes = state.recipes;

    return recipes.recipes[state.main.selectedRecipe];
  },
  valuesToCluster(state) {
    const {
      data,
      selectedHeader
    } = state.main;

    const values = new Array(data.length);

    for (let i = 0, l = data.length; i < l; i++)
      values[i] = data[i][selectedHeader];

    return values;
  }
};

/**
 * Main reducer.
 */
export default createReducer(DEFAULT_STATE, {
  [MAIN_CHANGE_STEP](state, action) {
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
    return {
      ...state,
      parsing: false,
      data: action.data,
      headers: action.headers,
      step: 'main'
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

  [MAIN_CLUSTERING](state) {
    return {
      ...state,
      clustering: true
    };
  },

  [MAIN_CLUSTERED](state, action) {
    return {
      ...state,
      clustering: false,
      step: 'clusters',
      clusters: action.clusters,
      clusteredHeader: action.header
    };
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
            headers: results.meta.fields
          });
        }
      });
    };
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

      // TODO: this should not use getState!
      const state = getState();

      const recipe = selectors.recipeData(state),
            values = selectors.valuesToCluster(state),
            header = state.main.selectedHeader;

      dispatch({type: MAIN_CLUSTERING});

      // Hooking on response
      CLUSTERING_WORKER.onmessage = message => {
        const {clusters} = message.data;

        return dispatch({type: MAIN_CLUSTERED, clusters, header});
      };

      // Asking worker to perform task
      CLUSTERING_WORKER.postMessage({recipe, values});
    };
  }
};
