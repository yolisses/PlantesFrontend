import {dispatchAllImages} from './dispatchAllImages';
import {dispatchPlant} from './dispatchPlant';

export async function dispatchSending(sending, callback) {
  const images = sending.images.map(localUri => {
    return {localUri};
  });
  // await required to mutate images
  await dispatchAllImages(images);
  const resultImages = images.map(image => image.sendLink);
  sending.images = resultImages;
  await dispatchPlant(sending);
  console.error('callback');
  // callback();
  return;
}
