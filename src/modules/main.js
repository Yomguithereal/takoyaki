/**
 * Takoyaki Main Module
 * =====================
 *
 * Main logic module.
 */
import CSV from 'papaparse';
import {resolver} from './helpers';

/**
 * Constants.
 */
const DATA_PARSING = '§Data/Parsing';
const DATA_PARSED = '§Data/Parsed';
const STEP_CHANGE = '§Step/StepChange';
const TARGET_CHANGE = '§Step/TargetChange';

/**
 * Default state.
 */
const DEFAULT_STATE = {
  current: 'upload',
  target: null,
  recipe: null,
  rows: [],
  headers: [],
  parsing: false
};

/**
 * The reducer.
 */
export default resolver(DEFAULT_STATE, {

  // When file is parsing
  [DATA_PARSING](state) {
    return {
      ...state,
      parsing: true
    };
  },

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

  // When file is parsed
  [DATA_PARSED](state, action) {
    return {
      ...state,
      rows: action.rows,
      headers: action.headers,
      parsing: false
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
