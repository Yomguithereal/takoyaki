/**
 * Takoyaki Clusterers Definitions
 * ================================
 *
 * Definining the clustering methods that can be used by Takoyaki.
 */
import keyCollision from 'talisman/clustering/record-linkage/key-collision';
import naive from 'talisman/clustering/record-linkage/naive';

export default {
  keyCollision: {
    label: 'Key Collision',
    description: 'Colliding keys go into the same cluster.',
    shuffle: false,
    build({preprocessor}) {
      return items => {
        return keyCollision({key: preprocessor}, items);
      };
    }
  },
  naive: {
    label: 'Naive',
    description: 'Naive O(n^2) clusterer.',
    shuffle: true,
    build({distance, radius}) {
      return items => {
        return naive({distance, radius}, items);
      };
    }
  }
};
