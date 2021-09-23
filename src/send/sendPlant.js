import {api} from 'api';

export async function sendPlant(sending) {
  const plant = sending.localData;
  console.error(plant);
  const getExtension = filename => filename.split('.').pop();
  plant.imagesTypes = plant.images.map(getExtension);
  try {
    const res = await api.post('/plant', plant);
    sending.images = res.data.images.map((image, index) => {
      return {
        image,
        localImage: sending.localData.images[index],
      };
    });
    delete sending.localData;
    console.error(sending);
  } catch (err) {
    console.error(err.message);
  }
}
