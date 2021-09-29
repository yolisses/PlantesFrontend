import {observable} from 'mobx';

export const searchOptions = observable({
  sell: false,
  swap: true,
  donate: true,
});
