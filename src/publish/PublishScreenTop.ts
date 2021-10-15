import React from 'react';
import {View} from 'react-native';

import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'common/CustomHeader';
import {BackButton} from 'common/BackButton';

export function PublishScreenTop({
  ratio,
  headerLeft,
  headerRight,
  hideBar = false,
}) {
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        title="Publicar"
        left={headerLeft !== undefined ? headerLeft : <BackButton />}
        right={headerRight}
      />
      {!hideBar && <ProgressBar ratio={ratio} />}
    </View>
  );
}
