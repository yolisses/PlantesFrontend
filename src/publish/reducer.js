const initialState = {count: 0, name: 'peteca'};

export function reducer(state = initialState, {id, value}) {
  if (!id) {
    throw new Error('No id provided');
  }
  const copy = {...state};
  copy[id] = value;
  return copy;
}
