import React, {useMemo} from 'react';

import {NextButton} from 'publish/NextButton';
import {CustomHeader} from 'publish/CustomHeader';
import {DiscardButton} from 'publish/DiscardButton';
import {LocalImagesSelector} from 'publish/LocalImagesSelector';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {usePublish} from 'publish/PublishContext';

function ValidatedHeader() {
  const {state} = usePublish();
  const refresh = state._localRefreshImagesPreview;

  const canContinue = useMemo(() => {
    const images = Object.keys(state.images || {});
    return !!images?.length;
  }, [refresh]);

  return (
    <CustomHeader
      title="Publicar"
      left={canContinue && <DiscardButton />}
      right={canContinue && <NextButton route="Detail" />}
    />
  );
}

export function PublishImagesScreen() {
  return (
    <>
      <FooterNavigationLayout selected="Publish">
        <ValidatedHeader />
        <LocalImagesSelector />
      </FooterNavigationLayout>
    </>
  );
}
