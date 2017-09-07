/**
 * Takoyaki Module Helpers
 * ========================
 *
 * Miscellaneous helpers to be used with redux modules.
 */

/**
 * Function used to resolve reducers in constant time.
 *
 * @param  {mixed}    defaultState - Default state.
 * @param  {object}   map          - Functions mapped to action types.
 * @return {function}              - The reducer.
 */
export function createReducer(defaultState, map) {
  return function(state = defaultState, action) {
    const lookup = map[action.type];

    if (typeof lookup === 'function')
      return lookup(state, action);

    return state;
  };
}
