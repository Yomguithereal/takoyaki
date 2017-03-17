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
    distance: 'levenshtein'
  },
  donato: {
    id: 'donato',
    label: 'The Donato',
    description: 'Apply the Carry stemmer to strings before colliding them.',
    preprocessor: ['carry'],
    clusterer: 'keyCollision'
  }
};
