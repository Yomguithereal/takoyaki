/**
 * Takoyaki Main Module
 * =====================
 *
 * Top-level module.
 */
import {createReducer} from './helpers';

/**
 * Constants.
 */
const MAIN_CHANGE_STEP = '§Main/ChangeStep';

/**
 * Default state.
 */
const DEFAULT_STATE = {
  step: 'upload'
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
  }
});

/**
 * Actions.
 */
export const actions = {

  // Changing the current step
  changeStep(step) {
    return {type: MAIN_CHANGE_STEP, step};
  }
};
