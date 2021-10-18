import {Point} from 'geojson';

import {Tag} from './Tag';
import {UserId} from './User';
import {PlantImage} from './PlantImage';

export type PlantId = number;

export interface Plant {
  id: PlantId;
  tags: Tag[];
  name: string;
  city: string;
  card: string;
  price: number;
  swap: boolean;
  state: string;
  userId: UserId;
  amount?: number;
  donate: boolean;
  location: Point;
  deletedAt?: Date;
  images: PlantImage[];
  description?: string;
}
