import {api} from 'api';

export async function sendPlant(plant) {
  console.error(plant);
  try {
    await api.post('/plant', plant);
  } catch (err) {
    console.error(err.message);
  }
}
