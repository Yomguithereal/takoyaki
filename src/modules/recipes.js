/**
 * Takoyaki Recipes Module
 * ========================
 *
 * Module in charge of handling the various recipes.
 */
import uuid from 'uuid/v4';
import omit from 'lodash/omit';
import RECIPES from '../definitions/recipes';
import {createReducer} from './helpers';
import {sortedRecipes} from '../definitions/helpers';

/**
 * Constants.
 */
const RECIPES_CREATE = '§Recipes/Create';
const RECIPES_SELECT = '§Recipes/Select';
const RECIPES_HYDRATE = '§Recipes/Hydrate';
const RECIPES_DELETE = '§Recipes/Delete';
const RECIPES_UPDATE_TITLE = '§Recipes/UpdateTitle';
const RECIPES_UPDATE_DESCRIPTION = '§Recipes/UpdateDescription';
const RECIPES_ADD_PREPROCESSOR = '§Recipes/AddPreprocessor';
const RECIPES_REMOVE_PREPROCESSOR = '§Recipes/RemovePreprocessor';
const RECIPES_SELECT_CLUSTERER = '§Recipes/SelectClusterer';
const RECIPES_SELECT_METRIC = '§Recipes/SelectMetric';

export const RECIPE_DATA_CONSTANTS = new Set([
  RECIPES_CREATE,
  RECIPES_DELETE,
  RECIPES_UPDATE_TITLE,
  RECIPES_UPDATE_DESCRIPTION,
  RECIPES_ADD_PREPROCESSOR,
  RECIPES_REMOVE_PREPROCESSOR
]);

/**
 * Default state.
 */
const DEFAULT_STATE = {
  recipes: RECIPES,
  editedRecipe: null
};

/**
 * Selectors.
 */
export const selectors = {
  editedRecipe(state) {
    return state.recipes.recipes[state.recipes.editedRecipe];
  },

  sortedRecipes(state) {
    return sortedRecipes(state.recipes.recipes);
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

  // When a recipe is selected
  [RECIPES_SELECT](state, action) {
    return {
      ...state,
      editedRecipe: action.recipe
    };
  },

  // When loading user recipes from a persistent source
  [RECIPES_HYDRATE](state, action) {
    return {
      ...state,
      recipes: {
        ...action.recipes,
        ...state.recipes
      }
    };
  },

  // When a recipe is deleted
  [RECIPES_DELETE](state, action) {
    return {
      ...state,
      recipes: omit(state.recipes, [action.recipe])
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
  },

  // When adding a preprocessor to the edited recipe's chain
  [RECIPES_ADD_PREPROCESSOR](state, action) {
    return {
      ...state,
      recipes: {
        ...state.recipes,
        [state.editedRecipe]: {
          ...state.recipes[state.editedRecipe],
          preprocessor: state
            .recipes[state.editedRecipe]
            .preprocessor
            .concat(action.preprocessor)
        }
      }
    };
  },

  // When removing a preprocessor to the edited recipe's chain
  [RECIPES_REMOVE_PREPROCESSOR](state, action) {
    return {
      ...state,
      recipes: {
        ...state.recipes,
        [state.editedRecipe]: {
          ...state.recipes[state.editedRecipe],
          preprocessor: state
            .recipes[state.editedRecipe]
            .preprocessor
            .filter((_, i) => i !== action.index)
        }
      }
    };
  },

  // When selecting the edited recipe's clusterer
  [RECIPES_SELECT_CLUSTERER](state, action) {
    return {
      ...state,
      recipes: {
        ...state.recipes,
        [state.editedRecipe]: {
          ...state.recipes[state.editedRecipe],
          clusterer: action.clusterer
        }
      }
    };
  },

  // When selecting the edited recipe's metric
  [RECIPES_SELECT_METRIC](state, action) {
    return {
      ...state,
      recipes: {
        ...state.recipes,
        [state.editedRecipe]: {
          ...state.recipes[state.editedRecipe],
          metric: action.metric
        }
      }
    };
  }
});

/**
 * Actions.
 */
export const actions = {
  create() {
    const recipe = {
      id: uuid(),
      addedByUser: true,
      label: 'My custom recipe',
      description: 'Description of my custom clustering recipe.',
      preprocessor: [],
      clusterer: 'keyCollision',
      metric: 'levenshtein'
    };

    return {type: RECIPES_CREATE, recipe};
  },

  select(recipe) {
    return {type: RECIPES_SELECT, recipe};
  },

  hydrate(recipes) {
    return {type: RECIPES_HYDRATE, recipes};
  },

  delete(recipe) {
    return {type: RECIPES_DELETE, recipe};
  },

  updateTitle(title) {
    return {type: RECIPES_UPDATE_TITLE, title};
  },

  updateDescription(description) {
    return {type: RECIPES_UPDATE_DESCRIPTION, description};
  },

  addPreprocessor(preprocessor) {
    return {type: RECIPES_ADD_PREPROCESSOR, preprocessor};
  },

  removePreprocessor(index) {
    return {type: RECIPES_REMOVE_PREPROCESSOR, index};
  },

  selectClusterer(clusterer) {
    return {type: RECIPES_SELECT_CLUSTERER, clusterer};
  },

  selectMetric(metric) {
    return {type: RECIPES_SELECT_METRIC, metric};
  }
};
