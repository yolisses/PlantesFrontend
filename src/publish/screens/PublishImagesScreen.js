import React from 'react';
import {PublishScreenLayout} from './PublishScreenLayout';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {ImageOrderSelect} from 'publish/ImageOrderSelector';
import {AddImageButtons} from 'publish/AddImageButtons';
import {ImageCropper} from '../ImageCropper';

export function PublishImagesScreen() {
  return (
    <FooterNavigationLayout disabled>
      <PublishScreenLayout
        ratio={1 / 3}
        nextRoute="PublishDetail"
        padding={0}
        hideBar>
        <ImageCropper />
        <AddImageButtons />
      </PublishScreenLayout>
    </FooterNavigationLayout>
  );
}
