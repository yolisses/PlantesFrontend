import React from 'react';
import {useSelector} from 'react-redux';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {ChooseImagesPlaceholder} from './ChooseImagesPlaceholder';

export function PublishImagesPreview() {
  const images = useSelector(state => state.images);

  if (!images?.length) {
    return <ChooseImagesPlaceholder />;
  }

  return <ImagesSwiper images={images} />;
}
