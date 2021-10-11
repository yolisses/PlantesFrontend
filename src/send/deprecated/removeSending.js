import {send} from './sendings';

export function removeSending(id) {
  delete send.sendings[id];
}
