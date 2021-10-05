import {observable} from 'mobx';

export const searchOptions = observable({
  tags: {},
  text: null,
  availabilities: {},
});
