/**
 * Select a random element from an array.
 * @template T
 * @param {T[]} items
 * @returns {T | null}
 */
const pickRandom = (items) => {
  if (!items.length) return null;
  return items[Math.floor(Math.random() * items.length)];
};

export default pickRandom;
