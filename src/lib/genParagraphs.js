// src/lib/genParagraphs.js
const { shuffleArray } = require("./shuffleArray");

/**
 * Generate paragraphs of text with minimal quote reuse
 * @param {Array} quotefile Array of quote objects
 * @param {number} num Number of paragraphs to generate
 * @returns {Array<string>} Array of paragraphs (strings)
 */
function genParagraphs(quotefile, num) {
  let unusedQuotes = shuffleArray(quotefile);
  const paragraphs = [];

  for (let i = 0; i < num; i++) {
    // Random number of lines per paragraph (5-8)
    const numLines = Math.floor(Math.random() * 4) + 5;

    // If not enough quotes left, reshuffle and refill
    if (unusedQuotes.length < numLines) {
      unusedQuotes = shuffleArray(quotefile);
    }

    // Take numLines quotes from the front
    const paraQuotes = unusedQuotes.splice(0, numLines);
    paragraphs.push(paraQuotes.map((q) => q.quote).join(" "));
  }

  return paragraphs;
}

module.exports = { genParagraphs };
