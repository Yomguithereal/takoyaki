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
    method: 'keyCollision'
  },
  {
    key: 'metaphoneCollision',
    label: 'Metaphone Collision',
    description: 'Colliding the metaphones.',
    preprocessor: 'metaphone',
    method: 'keyCollision'
  }
];
