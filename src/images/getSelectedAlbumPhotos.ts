import CameraRoll from '@react-native-community/cameraroll';
import {allPhotosAlbum} from './allPhotosAlbum';
import {selectedAlbum} from './selectedAlbum';

export async function getSelectedAlbumPhotos() {
  const res = await CameraRoll.getPhotos({
    groupName:
      selectedAlbum.name !== allPhotosAlbum ? selectedAlbum.name : undefined,
    first: 78, // layout reason...
  });
  return res.edges.map(edge => edge.node.image.uri);
}
