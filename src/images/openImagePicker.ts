import {observable} from 'mobx';
import {navigate} from '../navigation/RootNavigation';

export const imagesAux = observable({onFinish: () => {}});

export function openImagePicker(
  value: ListObj,
  onFinish: (value: ListObj) => void,
) {
  navigate('Images', {initialValue: value});
  imagesAux.onFinish = onFinish;
}
