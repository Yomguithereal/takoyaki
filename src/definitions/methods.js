/**
 * Takoyaki Methods Definitions
 * =============================
 *
 * Definining the clustering methods that can be used by Takoyaki.
 */
import keyCollision from 'talisman/clustering/record-linkage/key-collision';

export default {
  keyCollision: {
    label: 'Key Collision',
    description: 'Colliding keys go into the same cluster.',
    build() {
      return items => {
        return keyCollision(null, items);
      };
    }
  }
};
