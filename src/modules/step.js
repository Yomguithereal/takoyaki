/**
 * Takoyaki Step Module
 * =====================
 *
 * Module in charge of the overall process' state.
 */
import {resolver} from './helpers';

/**
 * Constants.
 */
const STEP_CHANGE = '§Step/Change';

/**
 * Default state.
 */
const DEFAULT_STATE = {
  current: 'upload'
};

/**
 * The reducer.
 */
export default resolver(DEFAULT_STATE, {

  // When file is parsed
  [STEP_CHANGE](state, action) {
    return {
      ...state,
      current: action.step
    };
  }
});

/**
 * Actions.
 */
export function changeStep(step) {
  return {
    type: STEP_CHANGE,
    current: step
  };
}
