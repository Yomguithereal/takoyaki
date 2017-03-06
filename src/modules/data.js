/**
 * Takoyaki Data Module
 * =====================
 *
 * Module in charge of data parsing & edition.
 */
import CSV from 'papaparse';
import {resolver} from './helpers';
import {STEP_CHANGE} from './step';

/**
 * Constants.
 */
const DATA_PARSING = '§Data/Parsing';
const DATA_PARSED = '§Data/Parsed';

/**
 * Default state.
 */
const DEFAULT_STATE = {
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
