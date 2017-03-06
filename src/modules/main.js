/**
 * Takoyaki Main Module
 * =====================
 *
 * Main logic module.
 */
import CSV from 'papaparse';
import {resolver} from './helpers';
import ClustererWorker from '../workers/clusterer.worker';

// TODO: pluck the target value from option.

/**
 * Booting worker.
 */
const WORKER = new ClustererWorker();
let LOCK = false;

/**
 * Constants.
 */
const DATA_PARSING = '§Main/DataParsing';
const DATA_PARSED = '§Main/DataParsed';
const STEP_CHANGE = '§Main/StepChange';
const TARGET_CHANGE = '§Main/TargetChange';
const RECIPE_CHANGE = '§Main/RecipeChange';
const CLUSTERS_COMPUTED = '§Main/ClustersComputed';

/**
 * Default state.
 */
const DEFAULT_STATE = {
  current: 'upload',
  target: null,
  recipe: null,
  rows: [],
  headers: [],
  parsing: false,
  clusters: null,
  clustering: false
};

/**
 * The reducer.
 */
export default resolver(DEFAULT_STATE, {

  // When step is changed
  [STEP_CHANGE](state, action) {
    return {
      ...state,
      current: action.step
    };
  },

  // When target column is changed
  [TARGET_CHANGE](state, action) {
    return {
      ...state,
      target: action.target
    };
  },

  // When recipe is changed
  [RECIPE_CHANGE](state, action) {
    return {
      ...state,
      recipe: action.recipe
    };
  },

  // When file is parsing
  [DATA_PARSING](state) {
    return {
      ...state,
      parsing: true
    };
  },

  // When file is parsed
  [DATA_PARSED](state, action) {
    return {
      ...state,
      rows: action.rows,
      headers: action.headers,
      parsing: false
    };
  },

  // When clusters are computed
  [CLUSTERS_COMPUTED](state, action) {
    return {
      ...state,
      clustering: false,
      clusters: action.clusters
    };
  }
});

/**
 * Actions.
 */
export function parseFile(file, delimiter) {
  return dispatch => {

    // Loading
    dispatch({type: DATA_PARSING});

    // Parsing the full file with provided options
    CSV.parse(file, {
      delimiter,
      header: true,
      complete(results) {

        dispatch({type: STEP_CHANGE, step: 'clean'});

        return dispatch({
          type: DATA_PARSED,
          rows: results.data,
          headers: results.meta.fields
        });
      }
    });
  };
}

export function changeStep(step) {
  return {
    type: STEP_CHANGE,
    current: step
  };
}

export function changeTarget(column) {
  return {
    type: TARGET_CHANGE,
    target: column
  };
}

export function changeRecipe(recipe) {
  return {
    type: RECIPE_CHANGE,
    recipe
  };
}

export function computeClusters() {
  let LOCK = true;

  return (dispatch, getState) => {
    const {rows, recipe, target} = getState().main;

    WORKER.onmessage = ({clusters}) => {
      return dispatch({type: CLUSTERS_COMPUTED}, clusters);
    };

    const values = rows.map(row => row[target.value] || '');

    WORKER.postMessage({values, recipe});
  };
}
