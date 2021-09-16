const isInvalid = value => value === undefined || value === null;

export function reducer(state, {id, value}) {
  if (!id) {
    throw new Error('No id provided. Action:', JSON.stringify({id, value}));
  }
  if (Array.isArray(id)) {
    id.forEach(subId => {
      console.error(typeof subId);
      if (isInvalid(subId)) {
        throw new Error('Invalid id. Action: ' + JSON.stringify({id, value}));
      }
    });
    return state;
  } else {
    const copy = {...state};
    copy[id] = value;
    return copy;
  }
}
