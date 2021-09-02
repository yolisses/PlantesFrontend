import React from 'react';
import {View} from 'react-native';

import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';

export function PublishScreenLayout({
  children,
  ratio,
  nextRoute,
  showNextButton,
}) {
  return (
    <View style={{flex: 1}}>
      <ProgressBar ratio={ratio} />
      <View style={{flex: 1}}>{children}</View>
      {showNextButton !== false && <NextButton route={nextRoute} />}
    </View>
  );
}
