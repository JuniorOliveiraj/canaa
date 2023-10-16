// ----------------------------------------------------------------------

export const TRANSITION = {
  duration: 4,
  repeat: 'Infinity',
  ease: [0.43, 0.13, 0.23, 0.96]
};

export const varPath = {
  animate: {
    fillOpacity: [1, 0.9, 0],
    pathLength: [0, 0.1, 1],
    transition: TRANSITION,
    repeat: 'Infinity'
  }
};
