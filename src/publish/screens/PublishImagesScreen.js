import React from 'react';
import {PublishScreenLayout} from './PublishScreenLayout';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {ImageOrderSelect} from 'publish/ImageOrderSelector';
import {AddImageButtons} from 'publish/AddImageButtons';

export function PublishImagesScreen() {
  return (
    <FooterNavigationLayout disabled>
      <PublishScreenLayout ratio={1 / 3} nextRoute="PublishDetail" padding={0}>
        <ImageOrderSelect />
        <AddImageButtons />
      </PublishScreenLayout>
    </FooterNavigationLayout>
  );
}
