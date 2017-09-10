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
const RECIPES_STEP = '§Recipes/Step';
const RECIPES_ADD_PREPROCESSOR = '§Recipes/AddPreprocessor';
const RECIPES_CHANGE_CLUSTERER = '§Recipes/ChangeClusterer';
const RECIPES_CHANGE_METRIC = '§Recipes/ChangeMetric';

/**
 * Default state.
 */
const DEFAULT_STATE = {
  recipes,
  editedRecipe: null
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
  },

  // When the clustering method is changed
  [RECIPES_CHANGE_CLUSTERER](state, action) {
    const recipe = state.recipes[action.id];

    return {
      ...state,
      recipes: {
        ...state.recipes,
        [action.id]: {
          ...recipe,
          clusterer: action.clusterer
        }
      }
    };
  },

  // When the metric is changed
  [RECIPES_CHANGE_METRIC](state, action) {
    const recipe = state.recipes[action.id];

    return {
      ...state,
      recipes: {
        ...state.recipes,
        [action.id]: {
          ...recipe,
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
  createRecipe() {
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

      dispatch(actions.changeRecipe(recipe.id));

      return dispatch(actions.changePage('recipe'));
    };
  },

  changeStep(step) {
    return {type: RECIPES_STEP, step};
  },

  addPreprocessor(id, preprocessor) {
    return {
      type: RECIPES_ADD_PREPROCESSOR,
      id,
      preprocessor
    };
  },

  changeClusterer(id, clusterer) {
    return {
      type: RECIPES_CHANGE_CLUSTERER,
      id,
      clusterer
    };
  },

  changeMetric(id, metric) {
    return {
      type: RECIPES_CHANGE_METRIC,
      id,
      metric
    };
  }
};
