/**
 * Takoyaki Module Endpoint
 * =========================
 *
 * Endpoint combining all the modules' reducers for the store to consume.
 */
import {combineReducers} from 'redux';
import data from './data';

const combined = combineReducers({
  data
});

export default combined;
