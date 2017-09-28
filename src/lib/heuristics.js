/**
 * Takoyaki Heuristics
 * ====================
 *
 * Compilation of heuristics used by the application.
 */
import naiveSample from 'pandemonium/naive-sample';

// Function returning whether the given string is deemed numerical
const NORMALIZATION_REGEX = /[^A-Z0-9]/g;
const SAMPLE_SIZE = 100;
const THRESHOLD = 0.7;

function isStringLike(value) {
  return isNaN(value.toUpperCase().replace(NORMALIZATION_REGEX, ''));
}

// Function sampling the given array and returning whether it seems like
// it contains string values
export function testColumnForStringValues(header, data) {
  const size = Math.min(SAMPLE_SIZE, data.length);

  const sample = naiveSample(size, data.length);

  let strings = 0;

  for (let i = 0, l = sample.length; i < l; i++) {
    if (isStringLike(data[sample[i]][header]))
      strings++;
  }

  const ratio = strings / size;

  if (ratio >= THRESHOLD)
    return true;

  return false;
}
