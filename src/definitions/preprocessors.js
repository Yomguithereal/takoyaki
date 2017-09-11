/**
 * Takoyaki Preprocessors Definitions
 * ===================================
 *
 * Definining the preprocessors that can be used by Takoyaki.
 */

// Normalizers
import fingerprint from 'talisman/keyers/fingerprint';

// Phonetics
import metaphone from 'talisman/phonetics/metaphone';

// Stemmers
import carry from 'talisman/stemmers/french/carry';

// Definitions
const preprocessors = {
  fingerprint: {
    label: 'String fingerprint',
    description: `
      Computes the fingerprint of the given string by removing anything
      superfluous to its meaning. This includes trimming, lowercasing, dropping
      punctation & control characters, splitting the string into word tokens,
      dropping duplicate words, sorting the tokens alphabetically to finally
      re-join them with spacing as well as dropping the accents.
    `,
    category: 'normalizer',
    build() {
      return fingerprint;
    }
  },
  metaphone: {
    label: 'Metaphone',
    description: 'Computes the metaphone code (i.e. symbolic phonetic representation) of the given string.',
    category: 'phonetics',
    build() {
      return metaphone;
    }
  },
  carry: {
    label: 'Carry',
    description: 'Carry is a French version of the famous Porter stemmer.',
    category: 'stemmer',
    language: 'fr',
    build() {
      return carry;
    }
  }
};

export default preprocessors;

// Helper
export function buildPreprocessorChain(list, ...args) {
  if (!list || !list.length)
    return x => x;

  const fns = list.map(id => preprocessors[id].build(...args));

  return value => {

    for (let i = 0, l = fns.length; i < l; i++)
      value = fns[i](value);

    return value;
  };
}
