/**
 * Takoyaki Module Endpoint
 * =========================
 *
 * Endpoint combining all the modules' reducers for the store to consume.
 */
import {combineReducers} from 'redux';
import file from './file';
import main from './main';
import recipes from './recipes';

const combined = combineReducers({
  file,
  main,
  recipes
});

export default combined;
