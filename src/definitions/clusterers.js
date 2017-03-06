/**
 * Takoyaki Clusterers Definitions
 * ================================
 *
 * Definining the clustering methods that can be used by Takoyaki.
 */
import keyCollision from 'talisman/clustering/record-linkage/key-collision';

// TODO: drop quirk when possible
const identity = x => x.value;

export default {
  keyCollision: {
    label: 'Key Collision',
    description: 'Colliding keys go into the same cluster.',
    map: false,
    build() {
      return items => {
        return keyCollision({key: identity}, items);
      };
    }
  }
};
