import ColorHash from 'color-hash';
import * as chalk from 'chalk';

const colorHash = new ColorHash({
  lightness: [0.45, 0.6, 0.75]
});

export const stringToChalk = (str) => {
  return chalk.hex(colorHash.hex(str));
};
