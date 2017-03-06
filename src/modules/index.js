/**
 * Takoyaki Module Endpoint
 * =========================
 *
 * Endpoint combining all the modules' reducers for the store to consume.
 */
import {combineReducers} from 'redux';
import file from './file';
import main from './main';

const combined = combineReducers({
  file,
  main
});

export default combined;
