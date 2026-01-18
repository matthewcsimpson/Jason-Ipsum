/**
 * Detect whether the user prefers reduced motion for accessibility reasons.
 * @returns {boolean}
 */
const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export default prefersReducedMotion;
