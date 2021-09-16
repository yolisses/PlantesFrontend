import React, {useMemo} from 'react';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {ChooseImagesPlaceholder} from './ChooseImagesPlaceholder';
import {usePublish} from './PublishContext';

export function PublishImagesPreview() {
  const {state} = usePublish();
  const refresh = state._localRefreshImagesPreview;

  return useMemo(() => {
    const images = Object.keys(state.images || {});
    if (!images?.length) {
      return <ChooseImagesPlaceholder />;
    }
    return <ImagesSwiper images={images} />;
  }, [refresh]);
}
