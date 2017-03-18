/**
 * Takoyaki Preprocessors Definitions
 * ===================================
 *
 * Definining the preprocessors that can be used by Takoyaki.
 */
import {compose} from 'ramda';

// Normalizers
import fingerprint from 'talisman/keyers/fingerprint';
import normalize from 'talisman/keyers/normalize';

// Phonetics
import metaphone from 'talisman/phonetics/metaphone';

// Stemmers
import carry from 'talisman/stemmers/french/carry';

// Tokenizers
// ...

// Definitions
const preprocessors = {
  fingerprint: {
    label: 'String fingerprint',
    description: 'Extract the "fingerprint" of the given string.',
    category: 'normalizer',
    build() {
      return fingerprint;
    }
  },
  normalize: {
    label: 'Normalizer',
    description: 'Normalize the string.',
    category: 'normalizer',
    build() {
      return normalize;
    }
  },
  metaphone: {
    label: 'Metaphone',
    description: 'Phonetic encoding.',
    category: 'phonetics',
    build() {
      return metaphone;
    }
  },
  carry: {
    label: 'Carry',
    description: 'Carry stemmer for the French language.',
    category: 'stemmer',
    build() {
      return carry;
    }
  }
};

// Helper
export function buildPreprocessorChain(list, ...args) {
  if (!list || !list.length)
    return x => x;

  return compose(...list.map(id => preprocessors[id].build(...args)));
}

export default preprocessors;
