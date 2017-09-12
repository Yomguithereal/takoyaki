/**
 * Takoyaki Preprocessors Definitions
 * ===================================
 *
 * Definining the preprocessors that can be used by Takoyaki.
 */

// Normalizers
import fingerprint from 'talisman/keyers/fingerprint';
import normalize from 'talisman/keyers/normalize';
import omission from 'talisman/keyers/omission';
import skeleton from 'talisman/keyers/skeleton';

// Phonetics
import metaphone from 'talisman/phonetics/metaphone';
import doubleMetaphone from 'talisman/phonetics/double-metaphone';

// Stemmers
import carry from 'talisman/stemmers/french/carry';

// Definitions
const preprocessors = {

  /**
   * Normalizers
   */
  fingerprint: {
    label: 'String fingerprint',
    description: `
      Computes the fingerprint of the given string by removing anything
      superfluous to its meaning.<br><br>This includes trimming, lowercasing, dropping
      punctation & control characters, splitting the string into word tokens,
      dropping duplicate words, sorting the tokens alphabetically to finally
      re-join them with spacing as well as dropping the accents.
    `,
    category: 'normalizer',
    build() {
      return fingerprint;
    }
  },
  normalizer: {
    label: 'String normalizer',
    description: `
      String normalization is a simple process consisting in harmonizing the
      problematic characters (e.g. double quotes) of the given string so that
      direct comparison becomes possible.
    `,
    category: 'normalizer',
    build() {
      return normalize;
    }
  },
  omission: {
    label: 'Omission key',
    description: `
      The omission key is a way to represent a string by concatenating the
      consonants of the string in order with a set of its vowels.
    `,
    category: 'normalizer',
    build() {
      return omission;
    }
  },
  skeleton: {
    label: 'Skeleton key',
    description: `
      The skeleton key is a way to represent a string by concatenating its
      first letter to the set of its consonants and then the set of its vowels.
    `,
    category: 'normalizer',
    build() {
      return skeleton;
    }
  },

  /**
   * Phonetics.
   */
  metaphone: {
    label: 'Metaphone',
    description: 'Computes the metaphone code (i.e. symbolic phonetic representation) of the given string.',
    category: 'phonetics',
    tokenizer: true,
    build() {
      return metaphone;
    }
  },
  doubleMetaphone: {
    label: 'Double Metaphone',
    description: `
      An improvement of the original metaphone algorithm yielding two possible
      encodings.<br><br>Note that it won't produce codes longer that 4 characters.
    `,
    category: 'phonetics',
    build() {
      return doubleMetaphone;
    }
  },

  /**
   * Stemmers.
   */
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

    for (let i = 0, l = fns.length; i < l; i++) {
      if (Array.isArray(value))
        value = value.map(v => fns[i](v));
      else
        value = fns[i](value);
    }

    return value;
  };
}
