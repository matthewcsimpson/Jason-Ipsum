import pickRandom from "./pickRandom";

/**
 * Ensure that all visible boxes contain unique images.
 * Resets fading state when active count changes.
 * @param {string[]} allIds
 * @param {Array<{currentId: string|null, nextId: string|null, isFading: boolean}>} boxes
 * @param {number} activeCount
 * @returns {Array<{currentId: string|null, nextId: string|null, isFading: boolean}>}
 */
const ensureUniqueVisible = (allIds, boxes, activeCount) => {
  const nextBoxes = boxes.map((box) => ({
    ...box,
    nextId: null,
    isFading: false,
  }));

  const used = new Set();

  for (let index = 0; index < activeCount; index++) {
    const id = nextBoxes[index]?.currentId ?? null;

    if (id && !used.has(id)) {
      used.add(id);
    } else if (nextBoxes[index]) {
      nextBoxes[index].currentId = null;
    }
  }

  for (let index = 0; index < activeCount; index++) {
    if (!nextBoxes[index]) continue;
    if (nextBoxes[index].currentId) continue;

    const available = allIds.filter((id) => !used.has(id));
    const chosenId = pickRandom(available) ?? allIds[0];

    nextBoxes[index].currentId = chosenId;
    used.add(chosenId);
  }

  return nextBoxes;
};

export default ensureUniqueVisible;
