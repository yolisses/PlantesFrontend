import {dispatchImage} from './dispatchImage';

export async function dispatchAllImages(images) {
  return await Promise.all(images.map(image => dispatchImage(image)));
}
