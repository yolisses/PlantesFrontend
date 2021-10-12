import {observable} from 'mobx';
import {navigate} from '../navigation/RootNavigation';

interface ImagesAux {
  onFinish?: (value: Image[]) => void;
}

const value: ImagesAux = {};

export const imagesAux = observable(value);

export function openImagePicker(
  value: Image[],
  onFinish: (value: Image[]) => void,
) {
  navigate('Images', {initialValue: value});
  imagesAux.onFinish = onFinish;
}
