/**
 * Takoyaki Preprocessors Definitions
 * ===================================
 *
 * Definining the preprocessors that can be used by Takoyaki.
 */
import fingerprint from 'talisman/keyers/fingerprint';
import metaphone from 'talisman/phonetics/metaphone';

export default {
  fingerprint: {
    label: 'String fingerprint',
    description: 'Normalize the string.',
    build() {
      return fingerprint;
    }
  },
  metaphone: {
    label: 'Metaphone',
    description: 'Phonetic encoding.',
    build() {
      return metaphone;
    }
  }
};
