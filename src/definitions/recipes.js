/**
 * Takoyaki Default Recipes
 * =========================
 *
 * Basic recipes known to work well on common cases.
 */
export default {
  fingerprint: {
    id: 'fingerprint',
    label: 'Fingerprint Collision',
    description: 'Colliding the fingerprints.',
    preprocessor: ['fingerprint'],
    clusterer: 'keyCollision'
  },
  metaphone: {
    id: 'metaphone',
    label: 'Metaphone Collision',
    description: 'Colliding the metaphones.',
    preprocessor: ['metaphone'],
    clusterer: 'keyCollision'
  },
  naiveLevenshtein: {
    id: 'naiveLevenshtein',
    label: 'Levenshtein Naive',
    description: 'Using the Levenshtein distance.',
    clusterer: 'naive',
    metric: 'levenshtein'
  },
  vpTreeLevenshtein: {
    id: 'vpTreeLevenshtein',
    label: 'Levenshtein VPTree',
    description: 'Leveraging a vantage point tree to perform a clustering using the Levenshtein distance.',
    clusterer: 'vpTree',
    metric: 'levenshtein'
  }
};
