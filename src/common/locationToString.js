import {concatWithCommas} from './concatWithCommas';

export function locationToString(location) {
  const {logradouro, complemento, bairro, localidade, uf} = location;
  return concatWithCommas([logradouro, complemento, bairro, localidade, uf]);
}
