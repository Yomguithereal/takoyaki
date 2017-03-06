/**
 * Takoyaki Module Endpoint
 * =========================
 *
 * Endpoint combining all the modules' reducers for the store to consume.
 */
import {combineReducers} from 'redux';
import file from './file';

const combined = combineReducers({
  file
});

export default combined;
