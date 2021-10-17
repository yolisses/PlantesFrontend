import {send} from '../send';

export function removeSending(id) {
  delete send.sendings[id];
}
