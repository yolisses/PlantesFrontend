import {sendImage} from './sendImage';

export function sendImagesInObj(images: ImagesObj) {
  for (let key in images) {
    sendImage(images[key]);
  }
}
