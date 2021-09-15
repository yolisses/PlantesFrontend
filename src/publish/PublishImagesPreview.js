import React from 'react';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {ChooseImagesPlaceholder} from './ChooseImagesPlaceholder';

export function PublishImagesPreview() {
  if (!images?.length) {
    return <ChooseImagesPlaceholder />;
  }

  return <ImagesSwiper images={images} />;
}
