import { BOX_COUNT_BY_BREAKPOINT } from "../data/breakpointsBoxCount";

/**
 * Determine how many boxes are active based on viewport width.
 * @returns {number}
 */
const getActiveCount = () => {
  if (typeof window === "undefined") return 4;

  const width = window.innerWidth;

  for (const breakpoint of BOX_COUNT_BY_BREAKPOINT) {
    if (width >= breakpoint.minWidth) {
      return breakpoint.count;
    }
  }

  return 1;
};

export default getActiveCount;
