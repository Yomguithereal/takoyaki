/**
 * Takoyaki State Selectors
 * =========================
 *
 * Collection of useful selectors used throughout the application.
 */
import {createSelector} from 'reselect';
import {buildPreprocessorChain} from './definitions/preprocessors';

const clustersSelector = state => state.main.clusters,
      targetSelector = state => state.main.target,
      sampleSelector = state => state.main.sample;

export const legibleClustersSelector = createSelector(
  clustersSelector,
  ({data, field}) => {
    return data;
  }
);

export const currentRecipeSelector = state => {
  return state.recipes.recipes[state.main.recipe];
};

export const sampleValuesSelector = createSelector(
  sampleSelector,
  targetSelector,
  (sample, target) => {
    return sample.map(row => row[target]);
  }
);

export const preprocessorSampleSelector = createSelector(
  currentRecipeSelector,
  sampleValuesSelector,
  (recipe, sample) => {
    const preprocessor = buildPreprocessorChain(recipe.preprocessor);

    return sample.map(value => {
      return {
        before: value,
        after: preprocessor(value)
      };
    });
  }
);
