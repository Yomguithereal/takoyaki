/**
 * Takoyaki Local Storage Redux Middleware
 * ========================================
 *
 * Simple middleware used to store the user's recipe in the local storage.
 */
import keyBy from 'lodash/keyBy';
import {GLOBAL_INIT} from '../modules/global';
import {RECIPE_DATA_CONSTANTS, actions} from '../modules/recipes';

/**
 * Constants.
 */
const RECIPE_KEY = 'takoyaki-recipes';

/**
 * Middleware.
 */
export default function localStorageMiddleware(store) {
  return next => action => {

    if (action.type === GLOBAL_INIT) {

      next(action);

      try {
        const data = localStorage.getItem(RECIPE_KEY);

        const recipes = keyBy(JSON.parse(data), 'id');
        store.dispatch(actions.hydrate(recipes));

      } catch (e) {
        console.error(e);
      }

      return;
    }

    if (!RECIPE_DATA_CONSTANTS.has(action.type))
      return next(action);

    next(action);

    const allRecipes = store.getState().recipes.recipes;

    const userRecipes = Object.keys(allRecipes)
      .filter(key => allRecipes[key].addedByUser)
      .map(key => allRecipes[key]);

    localStorage.setItem(RECIPE_KEY, JSON.stringify(userRecipes));
  };
}
