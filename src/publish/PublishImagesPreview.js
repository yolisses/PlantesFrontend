import React from 'react';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {ChooseImagesPlaceholder} from './ChooseImagesPlaceholder';
import {usePublish} from './contexts/PublishContext';

export function PublishImagesPreview() {
  const {images: imagesObj} = usePublish();
  const images = imagesObj?.getAsList();
  if (!images?.length) {
    return <ChooseImagesPlaceholder />;
  }

  return <ImagesSwiper images={images} />;
}
