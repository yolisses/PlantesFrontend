import {makeObservable, observable} from 'mobx';
import {User} from 'types/User';

class Auth {
  @observable user?: User;
  @observable token?: string;

  constructor() {
    makeObservable(this);
  }
}

export const auth = new Auth();
