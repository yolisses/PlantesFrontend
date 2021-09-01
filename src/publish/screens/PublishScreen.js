import React from 'react';
import {AddImageButtons} from 'publish/AddImageButtons';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

export function PublishScreen() {
  return (
    <FooterNavigationLayout selected="Publish">
      <AddImageButtons />
    </FooterNavigationLayout>
  );
}
