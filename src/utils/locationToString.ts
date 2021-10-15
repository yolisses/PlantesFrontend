import {concatWithCommas} from './concatWithCommas';

export function locationToString(location) {
  const {city, state_prov} = location;
  return concatWithCommas([city, state_prov]);
}
