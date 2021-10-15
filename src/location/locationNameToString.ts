import {concatWithCommas} from 'utils/concatWithCommas';

export function locationNameToString(locationName) {
  if (!locationName) {
    return null;
  }
  return concatWithCommas([locationName.city, locationName.state]);
}
