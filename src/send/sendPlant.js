import {sendPlantError} from './sendPlantErrorl';

export async function sendPlant() {
  if (Math.random() > 0.7) {
  } else {
    throw sendPlantError;
  }
}
