/**
 * Takoyaki Preprocessors Definitions
 * ===================================
 *
 * Definining the preprocessors that can be used by Takoyaki.
 */

// Normalizers
import fingerprint from 'talisman/keyers/fingerprint';

// Phonetics
import metaphone from 'talisman/phonetics/metaphone';

// Stemmers
import carry from 'talisman/stemmers/french/carry';

// Definitions
export default {
  fingerprint: {
    label: 'String fingerprint',
    description: 'Normalize the string.',
    category: 'normalizer',
    build() {
      return fingerprint;
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