import {makeObservable, observable} from 'mobx';
import {navigate} from '../navigation/RootNavigation';

class ImagesAux {
  @observable onFinish: (value: ImagesObj) => void;

  constructor() {
    makeObservable(this);
  }
}

export const imagesAux = new ImagesAux();

export function openImagePicker(
  value: ListObj,
  onFinish: (value: ImagesObj) => void,
) {
  navigate('Images', {initialValue: value});
  imagesAux.onFinish = onFinish;
}
