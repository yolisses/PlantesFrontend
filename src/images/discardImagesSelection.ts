import {selectedImages} from './selectedImages';

export function discardImagesSelection() {
  for (let key in selectedImages) {
    delete selectedImages[key];
  }
}
