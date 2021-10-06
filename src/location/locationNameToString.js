import {concatWithCommas} from 'common/concatWithCommas';

export function locationNameToString(locationName) {
  if (!locationName) {
    return null;
  }
  return concatWithCommas([locationName.city, locationName.state]);
}
