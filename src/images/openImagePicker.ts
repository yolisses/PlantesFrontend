import {observable} from 'mobx';
import {navigate} from '../navigation/RootNavigation';

interface ImagesAux {
  onFinish?: (value: ListObj) => void;
}

const value: ImagesAux = {};

export const imagesAux = observable(value);

export function openImagePicker(
  value: ListObj,
  onFinish: (value: ListObj) => void,
) {
  navigate('Images', {initialValue: value});
  imagesAux.onFinish = onFinish;
}
