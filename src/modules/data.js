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
const DATA_PARSED = '§Data/Parsed';

/**
 * Default state.
 */
const DEFAULT_STATE = {
  rows: [],
  headers: []
};

/**
 * The reducer.
 */
export default resolver(DEFAULT_STATE, {

  // When file is parsed
  [DATA_PARSED](state, action) {
    return {
      ...state,
      rows: action.rows,
      headers: action.headers
    };
  }
});

/**
 * Actions.
 */
export function parseFile(file, delimiter) {
  return dispatch => {

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
