import ColorHash from 'color-hash';
const chalk = require('chalk');

const colorHash = new ColorHash({
  lightness: [0.45, 0.6, 0.75]
});

export const stringToChalk = (str) => {
  return chalk.hex(colorHash.hex(str));
};

const unwrap = (data: any): any => {
  let result = data;
  while (typeof result === 'object' && Object.keys(result).length == 1) {
    result = result[Object.keys(result)[0]];
  }
  return result;
};

const removeType = (data: any): any => {
  if (typeof data === 'object' && data !== null) {
    if (Array.isArray(data)) {
      data = data.map(removeType);
    } else {
      delete data['__typename'];
      Object.keys(data).forEach(k => data[k] = removeType(data[k]));
    }
  }
  return data;
};

export const processResponse = (body: any | any[]): any => {
  const result = [];
  for (const response of Array.isArray(body) ? body : [body]) {
    const clean = unwrap(removeType(response));
    result.push(clean);
  }
  return result;
};
