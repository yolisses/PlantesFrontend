import {dispatchImage} from './dispatchImage';
import {dispatchPlant} from './dispatchPlant';

export async function dispatchSending(sending, callback) {
  const images = sending.images.map(localUri => {
    return {localUri};
  });
  const resultImages = await Promise.all(
    images.map(image => dispatchImage(image)),
  );
  sending.images = resultImages;
  await dispatchPlant(sending);
  console.error('callback');
  callback();
  return;
}
