import {observable} from 'mobx';

export const auth = observable({
  user: null,
  token: null,
  userId: null,
});
