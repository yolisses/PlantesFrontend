import {concatWithCommas} from './concatWithCommas';

export function cepToString(cep) {
  const {logradouro, complemento, bairro, localidade, uf} = cep;
  return concatWithCommas(logradouro, complemento, bairro, localidade, uf);
}
