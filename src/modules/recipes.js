/**
 * Takoyaki Recipes Module
 * ========================
 *
 * Module in charge of handling the various recipes.
 */
import recipes from '../definitions/recipes';
import {changePage, changeRecipe} from './main';
import {resolver} from './helpers';

/**
 * Constants.
 */
const RECIPES_CREATE = '§Recipe/Create';
const RECIPES_STEP = '§Recipe/Step';

/**
 * Default state.
 */
const DEFAULT_STATE = {
  step: 'preprocessing',
  recipes
};

/**
 * The reducer.
 */
export default resolver(DEFAULT_STATE, {

  // When a recipe is created
  [RECIPES_CREATE](state, action) {
    return {
      ...state,
      recipes: state.recipes.concat(action.recipe)
    };
  },

  // When step is changed
  [RECIPES_STEP](state, action) {
    return {
      ...state,
      step: action.step
    };
  }
});

/**
 * Actions.
 */
export function createRecipe() {
  return dispatch => {

    const recipe = {
      label: 'New clustering recipe',
      description: 'My incredible clustering recipe.',
      preprocessor: [],
      clusterer: null,
      distance: null
    };

    dispatch({
      type: RECIPES_CREATE,
      recipe
    });

    dispatch(changeRecipe(recipe));

    return dispatch(changePage('recipe'));
  };
}

export function changeStep(step) {
  return {type: RECIPES_STEP, step};
}
