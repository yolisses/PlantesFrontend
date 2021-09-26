import {api} from 'api';

export async function sendPlantInfo(sending) {
  const plant = sending.localData;
  const getExtension = filename => filename.split('.').pop();
  plant.imagesTypes = plant.images.map(getExtension);
  try {
    const res = await api.post('/plant', plant);
    sending.plantId = res.data._id;
    sending.images = res.data.images.map((image, index) => {
      return {
        image,
        localImage: sending.localData.images[index],
      };
    });
    delete sending.localData;
    sending.plantInfoSent = true;
  } catch (err) {
    console.error(err.message);
  }
}
