const initialState = {count: 0, name: 'peteca'};

export function reducer(state = initialState, action) {
  if (action.key) {
    const copy = {...state};
    copy[action.key] = action.value;
    return copy;
  } else {
    throw new Error('Action not recognized: ' + JSON.stringify(action));
  }
}
