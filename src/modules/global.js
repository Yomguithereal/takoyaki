/**
 * Takoyaki Global Module
 * =======================
 *
 * Defining constants & actions affecting the whole tree.
 */
export const GLOBAL_RESET = '§Global/Reset';

/**
 * Actions.
 */
export const actions = {
  reset() {
    return {type: GLOBAL_RESET};
  }
};
