import {Point} from 'geojson';
import {Plant} from './Plant';

export type UserId = number;

export interface User {
  id: UserId;
  name: string;
  image: string;
  description?: string;
  instagramUsername?: string;
  whatsappNumber?: number;
  state: string;
  city: string;
  location: Point;
  plants: Plant[];
  deletedAt?: Date;
}
