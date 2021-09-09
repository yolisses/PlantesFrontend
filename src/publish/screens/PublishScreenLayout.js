import React from 'react';
import {View} from 'react-native';

import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';

export function PublishScreenLayout({
  ratio,
  children,
  headerLeft,
  hideBar = false,
}) {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Publicar" left={headerLeft} />
      {!hideBar && <ProgressBar ratio={ratio} />}
      <View style={{flex: 1}}>{children}</View>
    </View>
  );
}
