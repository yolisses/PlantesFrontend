import {observable} from 'mobx';
import {allPhotosAlbum} from './allPhotosAlbum';

export const selectedAlbum = observable({
  name: allPhotosAlbum,
});
