/**
 * Takoyaki Preprocessors Definitions
 * ===================================
 *
 * Definining the preprocessors that can be used by Takoyaki.
 */
import fingerprint from 'talisman/keyers/fingerprint';

export default {
  fingerprint: {
    label: 'String fingerprint',
    description: 'Normalize the string.'
    build() {
      return string => {
        return fingerprint(string);
      };
    }
  }
};
