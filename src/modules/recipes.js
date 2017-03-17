/**
 * Takoyaki Recipes Module
 * ========================
 *
 * Module in charge of handling the various recipes.
 */
import uuid from 'uuid/v4';
import recipes from '../definitions/recipes';
import {changePage, changeRecipe} from './main';
import {resolver} from './helpers';

/**
 * Constants.
 */
const RECIPES_CREATE = '§Recipe/Create';
const RECIPES_STEP = '§Recipe/Step';
const RECIPES_ADD_PREPROCESSOR = '§Recipe/AddPreprocessor';

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
      recipes: {
        ...state.recipes,
        [action.recipe.id]: action.recipe
      }
    };
  },

  // When step is changed
  [RECIPES_STEP](state, action) {
    return {
      ...state,
      step: action.step
    };
  },

  // When a preprocessor is added
  [RECIPES_ADD_PREPROCESSOR](state, action) {
    const recipe = state.recipes[action.id];

    return {
      ...state,
      recipes: {
        ...state.recipes,
        [action.id]: {
          ...recipe,
          preprocessor: recipe.preprocessor.concat(action.preprocessor)
        }
      }
    };
  }
});

/**
 * Actions.
 */
export function createRecipe() {
  return dispatch => {

    const recipe = {
      id: uuid(),
      addedByUser: true,
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

    dispatch(changeRecipe(recipe.id));

    return dispatch(changePage('recipe'));
  };
}

export function changeStep(step) {
  return {type: RECIPES_STEP, step};
}

export function addPreprocessor(id, preprocessor) {
  return {
    type: RECIPES_ADD_PREPROCESSOR,
    id,
    preprocessor
  };
}
