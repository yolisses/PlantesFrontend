import {User} from '@react-native-google-signin/google-signin';
import {Point} from 'geojson';
import {PlantImage} from './PlantImage';
import {Tag} from './Tag';
import {UserId} from './User';

export type PlantId = number;

export interface Plant {
  id: PlantId;
  name: string;
  price: number;
  amount?: number;
  swap: boolean;
  donate: boolean;
  description?: string;
  state: string;
  city: string;
  location: Point;
  deletedAt?: Date;
  tags: Tag[];
  user: User | UserId;
  images: PlantImage[];
}
