import {useObserver} from 'mobx-react-lite';
import React from 'react';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {ChooseImagesPlaceholder} from './ChooseImagesPlaceholder';
import {selectedImages} from './selectedImages';

export function PublishImagesPreview() {
  return useObserver(() => {
    const images = Object.keys(selectedImages || {});
    if (!images.length) {
      return <ChooseImagesPlaceholder />;
    }
    return <ImagesSwiper images={images} />;
  });
}
