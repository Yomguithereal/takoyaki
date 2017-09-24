/**
 * Takoyaki Metrics Definitions
 * =============================
 *
 * Definining the distance metrics that can be used by Takoyaki.
 */
import jaccard from 'talisman/metrics/distance/jaccard';
import levenshtein from 'talisman/metrics/distance/levenshtein';

export default {
  levenshtein: {
    label: 'Levenshtein distance',
    description: `
      Edit distance, i.e. the number of substitutions, addition & deletions
      one needs to apply to transform string A into string B.
    `,
    trueMetric: true,
    complexity: 'O(mn)',
    scalability: 'low',
    build() {
      return levenshtein;
    }
  },
  jaccard: {
    label: 'Jaccard similarity',
    description: `
      Intersection of tokens divided by the union of tokens.
    `,
    trueMetric: true,
    similarity: true,
    complexity: 'O(n)',
    scalability: 'medium',
    build() {
      return jaccard;
    }
  }
};
