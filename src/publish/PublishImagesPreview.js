import React from 'react';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {ChooseImagesPlaceholder} from './ChooseImagesPlaceholder';
import {usePublish} from './PublishContext';

export function PublishImagesPreview() {
  const {
    state: {images},
  } = usePublish();
  if (!images?.length) {
    return <ChooseImagesPlaceholder />;
  }

  return <ImagesSwiper images={images} />;
}
