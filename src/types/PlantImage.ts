import {Plant, PlantId} from './Plant';

export interface PlantImage {
  uri: string;
  plant: Plant | PlantId;
}
