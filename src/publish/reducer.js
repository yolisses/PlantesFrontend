import {InvalidIdError} from './InvalidIdError';

const isInvalid = value => value === undefined || value === null;

export function reducer(state, action) {
  const {id, value} = action;
  if (!id) {
    throw new InvalidIdError(action);
  }
  if (Array.isArray(id)) {
    for (let subId of id) {
      if (isInvalid(subId)) {
        throw new InvalidIdError(action);
      }
    }
    return state;
  } else {
    const copy = {...state};
    copy[id] = value;
    return copy;
  }
}
