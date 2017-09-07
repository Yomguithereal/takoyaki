/**
 * Takoyaki Redux Modules
 * =======================
 *
 * Redux module endpoint.
 */
import {combineReducers} from 'redux';
import main from './main';
import upload from './upload';

export default combineReducers({
  main,
  upload
});
