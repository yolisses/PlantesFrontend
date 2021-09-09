import React from 'react';
import {View} from 'react-native';

import {ProgressBar} from 'publish/ProgressBar';

export function PublishScreenLayout({children, ratio, hideBar = false}) {
  return (
    <View style={{flex: 1}}>
      {!hideBar && <ProgressBar ratio={ratio} />}
      <View style={{flex: 1}}>{children}</View>
    </View>
  );
}
