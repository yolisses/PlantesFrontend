import {InvalidIdError} from './InvalidIdError';

const isInvalid = value => value === undefined || value === null;

function isIdValid(id) {
  for (let subId of id) {
    if (isInvalid(subId)) {
      return false;
    }
  }
  return true;
}

function setOnIdPath(id, value, state) {
  let actual = state;
  for (let i = 0; i < id.length; i++) {
    const subId = id[i];
    if (i === id.length - 1) {
      actual[subId] = value;
    } else {
      actual[subId] = actual[subId] ?? {};
      actual = actual[subId];
    }
  }
}

export function PublishReducer(state, action) {
  const {value} = action;
  let id = action.id;
  if (!id) {
    throw new InvalidIdError(action);
  }

  if (!Array.isArray(id)) {
    id = [id];
  }
  console.error(state);
  if (!isIdValid(id)) {
    throw new InvalidIdError(action);
  }
  const copy = {...state};
  setOnIdPath(id, value, copy);
  return copy;
}
