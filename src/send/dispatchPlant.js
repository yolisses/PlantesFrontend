import {sendPlant} from './sendPlant';
import {waitSomeTime} from './waitSomeTime';

export async function dispatchPlant(plant) {
  return new Promise(async (resolve, reject) => {
    while (true) {
      try {
        await sendPlant(plant);
        console.error('plant sent: ', plant.name);
        return resolve(true);
      } catch (err) {
        console.error('error sending plant: ', plant.name, err);
        await waitSomeTime();
      }
    }
  });
}
