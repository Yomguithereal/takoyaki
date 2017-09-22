/* eslint no-confusing-arrow: 0 */
/**
 * Takoyaki Definition Helpers
 * ============================
 *
 * Miscellaneous helper function tied to definitions.
 */
import sortBy from 'lodash/sortBy';
import CLUSTERERS from './clusterers';

const RECIPE_SORT_VALUES = {
  low: 3,
  medium: 2,
  high: 1
};

export function sortedRecipes(recipes) {
  recipes = Object.keys(recipes).map(key => recipes[key]);

  return sortBy(recipes, [
    recipe => RECIPE_SORT_VALUES[CLUSTERERS[recipe.clusterer].scalability],
    recipe => recipe.addedByUser ? 1 : 0,
    recipe => recipe.label
  ]);
}
