import {observable} from 'mobx';
import {selectedImages} from './selectedImages';

export const publishData = observable({});

export function reset() {
  for (let key in publishData) {
    delete publishData[key];
  }
  for (let key in selectedImages) {
    delete selectedImages[key];
  }
}
