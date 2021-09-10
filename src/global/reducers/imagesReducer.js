export function imagesReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_IMAGE':
      return state.concat(action.uri);
    case 'DISCARD':
      return [];
    default:
      return state;
  }
}
