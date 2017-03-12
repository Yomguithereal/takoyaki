/**
 * Takoyaki State Selectors
 * =========================
 *
 * Collection of useful selectors used throughout the application.
 */
import {createSelector} from 'reselect';

const clustersSelector = state => state.main.clusters;

export const legibleClustersSelector = createSelector(
  clustersSelector,
  ({data, field}) => {
    return data;
  }
);
