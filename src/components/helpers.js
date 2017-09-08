/**
 * Takoyaki Component Helpers
 * ===========================
 *
 * Miscellaneous helper functions used by the components.
 */
export function replaceSingleCharacter(string, pattern, fn) {
  const splits = string.split(pattern);

  const result = [];

  for (let i = 0, l = splits.length; i < l; i++) {
    const split = splits[i];

    result.push(split);

    if (i < l - 1)
      result.push(fn(i));
  }

  return result;
}
