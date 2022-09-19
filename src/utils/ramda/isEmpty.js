import { keys, length } from 'ramda';

const isEmpty = (obj) => length(keys(obj)) === 0;

export { isEmpty };
