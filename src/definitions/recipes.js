/**
 * Takoyaki Default Recipes
 * =========================
 *
 * Basic recipes known to work well on common cases.
 */
import sortBy from 'lodash/sortBy';

export default {
  fingerprint: {
    id: 'fingerprint',
    label: 'Fingerprint Collision',
    description: `
      Computing clusters of strings whose fingerprints are the same. This
      is definitely the first recipe you want to try since it is really cheap
      and usually produces very good results.
    `,
    preprocessor: ['fingerprint'],
    clusterer: 'keyCollision'
  },
  metaphone: {
    id: 'metaphone',
    label: 'Metaphone Collision',
    description: `
      This recipe will compute clusters of strings having the same metaphone
      encoding, i.e. strings that are pronounced roughly the same.
    `,
    preprocessor: ['metaphone'],
    clusterer: 'keyCollision'
  },
  naiveLevenshtein: {
    id: 'naiveLevenshtein',
    label: 'Levenshtein Naive',
    description: `
      This recipe will try to gather similar strings, i.e. strings whose
      Levensthein distance is below a given threshold (usually <= 2).
    `,
    clusterer: 'naive',
    metric: 'levenshtein'
  },
  vpTreeLevenshtein: {
    id: 'vpTreeLevenshtein',
    label: 'Levenshtein VPTree',
    description: 'This recipe leverages a vantage point tree to perform a clustering using the Levenshtein distance.',
    clusterer: 'vpTree',
    metric: 'levenshtein'
  }
};
