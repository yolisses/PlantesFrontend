import {auth} from 'auth/auth';
import {observable} from 'mobx';

export const searchOptions = observable({
  tags: {},
  text: null,
  availabilities: {},
  location: auth?.user?.location,
});
