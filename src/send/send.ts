import {makeObservable, observable} from 'mobx';

interface Sending {
  id: number;
  sent: boolean;
  itemFormData: ItemFormData;
}

class Send {
  @observable sendings: {[key: number]: Sending} = {};

  constructor() {
    makeObservable(this);
  }
}

export const send = new Send();
