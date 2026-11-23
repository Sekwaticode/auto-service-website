/*
 * Motion tokens for image-compare.tsx (not included with the pasted component).
 * Springs are written by feel: how long they take to look settled, and how much they overshoot.
 */
export const motionTokens = {
  spring: {
    /** Quick, nearly flat: the divider following a press or a key. */
    snappy: { type: "spring", visualDuration: 0.3, bounce: 0.12 },
    /** A little softer, with a hint of overshoot: the handle changing shape and the divider turning. */
    morph: { type: "spring", visualDuration: 0.42, bounce: 0.2 },
  },
} as const;
