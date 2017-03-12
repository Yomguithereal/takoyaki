/**
 * Takoyaki File Module
 * =====================
 *
 * Module in charge of file upload & preview.
 */
import CSV from 'papaparse';
import {resolver} from './helpers';

/**
 * Constants.
 */
const FILE_PREVIEW = '§File/Preview';

/**
 * Default state.
 */
const DEFAULT_STATE = {
  preview: null,
  delimiter: ',',
  headers: []
};

/**
 * The reducer.
 */
export default resolver(DEFAULT_STATE, {

  // When a file is uploaded and we need a preview
  [FILE_PREVIEW](state, action) {
    return {
      ...state,
      preview: action.preview,
      delimiter: action.delimiter,
      headers: action.headers
    };
  }
});

/**
 * Actions.
 */
export function previewFile(file, delimiter) {
  return dispatch => {

    // Parsing a preview of the file
    CSV.parse(file, {
      delimiter,
      preview: 50,
      header: true,
      complete(results) {

        return dispatch({
          type: FILE_PREVIEW,
          preview: results.data,
          delimiter: results.meta.delimiter,
          headers: results.meta.fields
        });
      }
    });
  };
}
