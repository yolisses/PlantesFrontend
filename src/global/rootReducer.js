import {combineReducers} from 'redux';
import {imagesReducer} from './reducers/imagesReducer';

export const rootReducer = combineReducers({
  images: imagesReducer,
});
