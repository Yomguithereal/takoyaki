/**
 * Takoyaki Redux Modules
 * =======================
 *
 * Redux module endpoint.
 */
import {combineReducers} from 'redux';
import main from './main';
import upload from './upload';
import recipes from './recipes';

export default combineReducers({
  main,
  upload,
  recipes
});
