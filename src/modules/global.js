/**
 * Takoyaki Global Module
 * =======================
 *
 * Defining constants & actions affecting the whole tree.
 */
export const GLOBAL_INIT = '§Global/Init';
export const GLOBAL_RESET = '§Global/Reset';

/**
 * Actions.
 */
export const actions = {
  init() {
    return {type: GLOBAL_INIT};
  },

  reset() {
    return {type: GLOBAL_RESET};
  }
};
