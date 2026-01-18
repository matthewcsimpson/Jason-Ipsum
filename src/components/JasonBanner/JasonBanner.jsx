// libraries
import { useEffect, useMemo, useRef, useState } from "react";

// styles
import "./JasonBanner.scss";

// data
import { jasonImages } from "../../data/jasonImages";
import { shuffleArray } from "../../lib/shuffleArray";

// components
import JasonImageBox from "../JasonImageBox/JasonImageBox";

// constants
const BOX_COUNT = 4;
const ROTATION_INTERVAL = 3000;

// helpers

/**
 * Determine how many boxes are considered active based on viewport width.
 * This must match the SCSS breakpoints.
 * @returns {number}
 */
const getActiveCount = () => {
  if (typeof window === "undefined") return 4;
  if (window.matchMedia("(min-width: 1024px)").matches) return 4;
  if (window.matchMedia("(min-width: 768px)").matches) return 3;
  if (window.matchMedia("(min-width: 480px)").matches) return 2;
  return 1;
};

/**
 * Detect whether the user prefers reduced motion for accessibility reasons.
 * @returns {boolean}
 */
const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

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

const JasonBanner = () => {
  const shuffledImages = useMemo(() => shuffleArray(jasonImages), []);
  const imagesById = useMemo(() => {
    const map = new Map();
    for (const image of shuffledImages) map.set(image.src, image);
    return map;
  }, [shuffledImages]);

  const allIds = useMemo(
    () => shuffledImages.map((img) => img.src),
    [shuffledImages],
  );

  const [activeCount, setActiveCount] = useState(() => getActiveCount());

  const [boxes, setBoxes] = useState(() => {
    const initialActive = getActiveCount();
    const initial = Array.from({ length: BOX_COUNT }, (_, index) => ({
      currentId: allIds[index] ?? allIds[0],
      nextId: null,
      isFading: false,
    }));
    return ensureUniqueVisible(allIds, initial, initialActive);
  });

  const rotationIndexRef = useRef(0);

  // update activeCount on resize
  useEffect(() => {
    const onResize = () => setActiveCount(getActiveCount());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // when activeCount changes, normalize visible boxes (unique + not mid-fade)
  useEffect(() => {
    setBoxes((prev) => ensureUniqueVisible(allIds, prev, activeCount));
  }, [activeCount, allIds]);

  // set up rotation interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (activeCount <= 0) return;
      if (prefersReducedMotion()) return;

      const targetIndex = rotationIndexRef.current % activeCount;
      rotationIndexRef.current = (rotationIndexRef.current + 1) % activeCount;

      setBoxes((prevBoxes) => {
        const target = prevBoxes[targetIndex];
        if (!target) return prevBoxes;
        if (target.isFading) return prevBoxes;

        const availableIds = buildAvailableIds(allIds, prevBoxes, activeCount);
        const nextId = pickRandom(availableIds);
        if (!nextId) return prevBoxes;

        return prevBoxes.map((box, index) => {
          if (index !== targetIndex) return box;
          return { ...box, nextId, isFading: true };
        });
      });
    }, ROTATION_INTERVAL);

    return () => clearInterval(intervalId);
  }, [activeCount, allIds]);

  /**
   * Swap a box's image after its fade transition completes.
   * @param {number} boxIndex
   */
  const handleFadeComplete = (boxIndex) => {
    setBoxes((prevBoxes) => {
      const box = prevBoxes[boxIndex];
      if (!box || !box.isFading || !box.nextId) return prevBoxes;

      return prevBoxes.map((item, index) =>
        index === boxIndex
          ? { ...item, currentId: item.nextId, nextId: null, isFading: false }
          : item,
      );
    });
  };

  return (
    <div className="jasonbanner">
      {boxes.map((box, index) => {
        const currentImage = imagesById.get(box.currentId) ?? shuffledImages[0];
        const nextImage = box.nextId ? imagesById.get(box.nextId) : null;

        return (
          <JasonImageBox
            key={`jason-box-${index}`}
            currentImage={currentImage}
            nextImage={nextImage}
            isFading={box.isFading}
            onFadeComplete={() => handleFadeComplete(index)}
          />
        );
      })}
    </div>
  );
};

export default JasonBanner;
