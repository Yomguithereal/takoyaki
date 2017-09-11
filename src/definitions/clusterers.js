/**
 * Takoyaki Clusterer Definitions
 * ===============================
 *
 * Definining the clustering methods that can be used by Takoyaki.
 */
import keyCollision from 'talisman/clustering/record-linkage/key-collision';
import naive from 'talisman/clustering/record-linkage/naive';
import vpTree from 'talisman/clustering/record-linkage/vp-tree';

export default {
  keyCollision: {
    label: 'Key Collision',
    description: 'TODO: description',
    scalability: 'high',
    complexity: 'O(n)',
    shuffle: false,
    needMetric: false,
    build({preprocessor}) {
      return items => {
        return keyCollision({key: preprocessor}, items);
      };
    },
    estimate(nb) {
      return nb;
    }
  },
  vpTree: {
    label: 'Vantage Point Tree',
    description: 'TODO: description',
    scalability: 'medium',
    complexity: 'O(n log(n))',
    shuffle: true,
    needMetric: true,
    trueMetrics: true,
    build({metric, radius}) {
      return items => {
        return vpTree({distance: metric, radius}, items);
      };
    },
    estimate(nb) {
      return nb * Math.log2(nb);
    }
  },
  naive: {
    label: 'Naive',
    description: 'TODO: description',
    scalability: 'low',
    complexity: 'O(n²)',
    shuffle: false,
    needMetric: true,
    build({metric, radius}) {
      return items => {
        return naive({distance: metric, radius}, items);
      };
    },
    estimate(nb) {
      return (nb * (nb - 1)) / 2;
    }
  }
};
