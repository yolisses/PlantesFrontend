import React from 'react';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {ChooseImagesPlaceholder} from './ChooseImagesPlaceholder';
import {useImages} from './ImagesContext';

export function PublishImagesPreview() {
  const {images: imagesObj} = useImages();
  const images = Object.keys(imagesObj || {});

  if (!images.length) {
    return <ChooseImagesPlaceholder />;
  }
  return <ImagesSwiper images={images} />;
}
