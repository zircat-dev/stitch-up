import { lensPath, view, set, over } from 'ramda';

export const makeLens = (path) => lensPath(path.split('.'));

export const getProp = (path) => view(makeLens(path));

export const setProp = (path, value) => set(makeLens(path), value);

export const modifyProp = (path, fn) => over(makeLens(path), fn);
