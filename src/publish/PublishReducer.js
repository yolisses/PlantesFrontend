import {InvalidIdError} from './InvalidIdError';

const isInvalid = id => id === undefined || id === null;

function isIdValid(id) {
  for (let subId of id) {
    if (isInvalid(subId)) {
      return false;
    }
  }
  return true;
}

function getToThePath(id, state, callBack) {
  let actual = state;
  for (let i = 0; i < id.length; i++) {
    const subId = id[i];
    if (i === id.length - 1) {
      callBack(subId, actual);
    } else {
      actual[subId] = actual[subId] ?? {};
      actual = actual[subId];
    }
  }
}

export function PublishReducer(state, action) {
  if (action.type === 'discardAll') {
    return {};
  }
  let id = action.id;
  if (!id) {
    throw new InvalidIdError(action);
  }
  if (!Array.isArray(id)) {
    id = [id];
  }
  if (!isIdValid(id)) {
    throw new InvalidIdError(action);
  }
  const copy = {...state};
  getToThePath(id, copy, (subId, actual) => {
    if (action.type === 'delete') {
      delete actual[subId];
    } else {
      actual[subId] = action.value;
    }
  });
  return copy;
}
