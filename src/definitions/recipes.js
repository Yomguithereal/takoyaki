/**
 * Takoyaki Default Recipes
 * =========================
 *
 * Basic recipes known to work well on common cases.
 */
export default [
  {
    label: 'Fingerprint Collision',
    description: 'Colliding the fingerprints.',
    preprocessor: 'fingerprint',
    clusterer: 'keyCollision'
  },
  {
    label: 'Metaphone Collision',
    description: 'Colliding the metaphones.',
    preprocessor: 'metaphone',
    clusterer: 'keyCollision'
  },
  {
    label: 'Levenshtein Naive',
    description: 'Using the Levenshtein distance.',
    clusterer: 'naive',
    distance: 'levenshtein'
  },
  {
    label: 'The Donato',
    description: 'Apply the Carry stemmer to strings before colliding them.',
    preprocessor: 'carry',
    clusterer: 'keyCollision'
  }
];
