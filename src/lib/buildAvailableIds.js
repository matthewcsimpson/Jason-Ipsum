/**
 * Build a list of available image IDs that are not currently assigned
 * to any visible box.
 * @param {string[]} allIds
 * @param {Array<{currentId: string|null, nextId: string|null}>} boxes
 * @param {number} activeCount
 * @returns {string[]}
 */
const buildAvailableIds = (allIds, boxes, activeCount) => {
  const used = new Set();

  for (let index = 0; index < activeCount; index++) {
    const box = boxes[index];
    if (!box) continue;

    if (box.currentId) used.add(box.currentId);
    if (box.nextId) used.add(box.nextId);
  }

  return allIds.filter((id) => !used.has(id));
};

export default buildAvailableIds;
