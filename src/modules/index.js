/**
 * Takoyaki Module Endpoint
 * =========================
 *
 * Endpoint combining all the modules' reducers for the store to consume.
 */
import {combineReducers} from 'redux';
import data from './data';
import file from './file';
import step from './step';

const combined = combineReducers({
  data,
  file,
  step
});

export default combined;
