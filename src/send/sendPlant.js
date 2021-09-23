import {api} from 'api';

export async function sendPlant(plant) {
  console.error(plant);
  const getExtension = filename => filename.split('.').pop();
  plant.imagesTypes = plant.images.map(getExtension);
  try {
    const res = await api.post('/plant', plant);
    console.error(res.data);
  } catch (err) {
    console.error(err.message);
  }
}
