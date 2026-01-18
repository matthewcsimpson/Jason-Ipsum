// src/lib/shuffleArray.js
/**
 * Shuffle an array using Fisher-Yates algorithm
 * @param {Array} array Array to shuffle
 * @returns {Array} Shuffled array
 */
function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

module.exports = { shuffleArray };
