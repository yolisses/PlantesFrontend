import {sendImage} from './sendImage';

export async function sendImagesInObj(images: ImagesObj) {
  return await Promise.all(
    Object.keys(images).map(key => sendImage(images[key])),
  );
}
