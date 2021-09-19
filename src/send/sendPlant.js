import {sendPlantError} from './sendPlantErrorl';

const CREATE_PLANT = gql`
  mutation CreatePlant($plant: PlantInput) {
    createPlant(input: $plant) {
      id
      name
    }
  }
`;

export async function sendPlant() {
  if (Math.random() > 0.7) {
  } else {
    throw sendPlantError;
  }
}
