import {Point} from 'geojson';
import {Location} from './Location';

export function getLocationFromPoint(point: Point): Location {
  const latitude = point.coordinates[0];
  const longitude = point.coordinates[1];
  return {latitude, longitude};
}
