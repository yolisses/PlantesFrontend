import React from 'react';
import {useField} from 'react-final-form';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {ChooseImagesPlaceholder} from './ChooseImagesPlaceholder';

export function PublishImagesPreview() {
  const {input} = useField('images');
  const images = Object.keys(input.value)?.map(image =>
    image.replace(':&#%', '.'),
  );

  if (!images?.length) {
    return <ChooseImagesPlaceholder />;
  }

  return <ImagesSwiper images={images} />;
}
