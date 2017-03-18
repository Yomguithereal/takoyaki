/**
 * Takoyaki Metrics Definitions
 * =============================
 *
 * Definining the distance metrics that can be used by Takoyaki.
 */
import levenshtein from 'talisman/metrics/distance/levenshtein';

export default {
  levenshtein: {
    label: 'Levenshtein distance',
    description: 'You know it...',
    build() {
      return levenshtein;
    }
  }
};
