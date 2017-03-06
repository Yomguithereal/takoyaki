/**
 * Takoyaki Module Endpoint
 * =========================
 *
 * Endpoint combining all the modules' reducers for the store to consume.
 */
import {combineReducers} from 'redux';
import data from './data';
import file from './file';

const combined = combineReducers({
  data,
  file
});

export default combined;
