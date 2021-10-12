import {observable} from 'mobx';
import {navigate} from '../navigation/RootNavigation';

export const imagesAux = observable({onFinish: () => {}});

export function openImagePicker(onFinish: (value: ListObj) => void) {
  navigate('Images');
  imagesAux.onFinish = onFinish;
}
