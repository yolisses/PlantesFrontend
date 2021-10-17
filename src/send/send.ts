import {makeObservable, observable} from 'mobx';

interface Sending {
  itemFormData: ItemFormData;
}

class Send {
  @observable sendings?: {[key: number]: Sending};

  constructor() {
    makeObservable(this);
  }
}

export const send = new Send();
