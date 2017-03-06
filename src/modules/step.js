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
export const STEP_CHANGE = '§Step/StepChange';
export const TARGET_CHANGE = '§Step/TargetChange';

/**
 * Default state.
 */
const DEFAULT_STATE = {
  current: 'upload',
  target: null
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

export function changeTarget(column) {
  return {
    type: TARGET_CHANGE,
    target: column
  };
}
