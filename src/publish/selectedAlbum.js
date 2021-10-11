import {observable} from 'mobx';
import {allPhotosAlbum} from '../images/allPhotosAlbum';

export const selectedAlbum = observable({
  name: allPhotosAlbum,
});
