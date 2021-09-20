import {api} from 'api';
import {waitSomeTime} from './waitSomeTime';

export async function dispatchPlant(plant) {
  return new Promise(async (resolve, reject) => {
    while (true) {
      try {
        const res = await api.post('/graphql', {
          query: `
          mutation CreatePlant($plant: PlantInput) {
            createPlant(input: $plant) {
              id
              name
            }
          }`,
          variables: {
            plant,
          },
        });
        console.error(res.data.data);
        console.error('plant sent: ', plant.name);
        return resolve(true);
      } catch (err) {
        if (err.response.status === 400) {
          console.error(err);
          return resolve(false);
        }
        console.error('error sending plant: ', plant.name, err);
        await waitSomeTime();
      }
    }
  });
}
