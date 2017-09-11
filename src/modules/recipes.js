/**
 * Takoyaki Recipes Module
 * ========================
 *
 * Module in charge of handling the various recipes.
 */
import uuid from 'uuid/v4';
import recipes from '../definitions/recipes';
import {createReducer} from './helpers';

/**
 * Constants.
 */
const RECIPES_CREATE = '§Recipes/Create';
const RECIPES_UPDATE_TITLE = '§Recipes/UpdateTitle';
const RECIPES_UPDATE_DESCRIPTION = '§Recipes/UpdateDescription';

/**
 * Default state.
 */
const DEFAULT_STATE = {
  recipes,
  editedRecipe: null
};

/**
 * Selectors.
 */
export const selectors = {
  editedRecipe(state) {
    return state.recipes.recipes[state.recipes.editedRecipe];
  }
};

/**
 * The reducer.
 */
export default createReducer(DEFAULT_STATE, {

  // When a recipe is created
  [RECIPES_CREATE](state, action) {
    return {
      ...state,
      recipes: {
        ...state.recipes,
        [action.recipe.id]: action.recipe
      },
      editedRecipe: action.recipe.id
    };
  },

  // When the edited recipe title is updated
  [RECIPES_UPDATE_TITLE](state, action) {
    return {
      ...state,
      recipes: {
        ...state.recipes,
        [state.editedRecipe]: {
          ...state.recipes[state.editedRecipe],
          label: action.title
        }
      }
    };
  },

  // When the edited recipe description is updated
  [RECIPES_UPDATE_DESCRIPTION](state, action) {
    return {
      ...state,
      recipes: {
        ...state.recipes,
        [state.editedRecipe]: {
          ...state.recipes[state.editedRecipe],
          description: action.description
        }
      }
    };
  }
});

/**
 * Actions.
 */
export const actions = {
  createRecipe() {
    const recipe = {
      id: uuid(),
      addedByUser: true,
      label: 'My custom recipe',
      description: 'Description of my custom clustering recipe.',
      preprocessor: [],
      clusterer: 'keyCollision',
      metric: null
    };

    return {type: RECIPES_CREATE, recipe};
  },

  updateTitle(title) {
    return {type: RECIPES_UPDATE_TITLE, title};
  },

  updateDescription(description) {
    return {type: RECIPES_UPDATE_DESCRIPTION, description};
  }
};
