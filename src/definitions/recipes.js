/**
 * Takoyaki Default Recipes
 * =========================
 *
 * Basic recipes known to work well on common cases.
 */
export default [
  {
    key: 'fingerprintCollision',
    label: 'Fingerprint Collision',
    description: 'Colliding the fingerprints.',
    preprocessor: 'fingerprint',
    clusterer: 'keyCollision'
  },
  {
    key: 'metaphoneCollision',
    label: 'Metaphone Collision',
    description: 'Colliding the metaphones.',
    preprocessor: 'metaphone',
    clusterer: 'keyCollision'
  },
  {
    key: 'levenshteinNaive',
    label: 'Levenshtein Naive',
    description: 'Using the Levenshtein distance.',
    clusterer: 'naive',
    distance: 'levenshtein'
  }
];
