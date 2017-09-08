/**
 * Takoyaki Main Module
 * =====================
 *
 * Top-level module.
 */
import CSV from 'papaparse';
import {createReducer} from './helpers';

/**
 * Constants.
 */
const MAIN_CHANGE_STEP = '§Main/ChangeStep';
const MAIN_PARSING = '§Main/Parsing';
const MAIN_PARSED = '§Main/Parsed';
const MAIN_SELECT_HEADER = '§Main/SelectHeader';

/**
 * Default state.
 */
const DEFAULT_STATE = {
  step: 'upload',
  data: null,
  headers: null,
  selectedHeader: null
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
  }
};
