export function imagesReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_IMAGE':
      return state.concat(action.uri);
    default:
      return state;
  }
}
