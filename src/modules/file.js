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
  delimiter: ','
};

/**
 * The reducer.
 */
export default resolver(DEFAULT_STATE, {

  // When a file is uploaded and we need a preview
  [FILE_PREVIEW](state, action) {
    return {
      preview: action.preview,
      delimiter: action.delimiter,
      ...state
    };
  }
});

/**
 * Actions.
 */
export function previewFile(file) {
  return dispatch => {

    // Parsing a preview of the file
    CSV.parse(file, {
      preview: 30,
      complete(results) {
        return dispatch({
          type: FILE_PREVIEW,
          preview: results.data,
          delimiter: results.meta.delimiter
        });
      }
    });
  };
}
