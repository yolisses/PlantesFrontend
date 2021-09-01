import React from 'react';
import {View} from 'react-native';
import {FooterNavigation} from 'navigation/FooterNavigation';

export function FooterNavigationLayout({children, selected, disabled}) {
  return (
    <View style={{height: '100%'}}>
      <View style={{flex: 1}}>{children}</View>
      {!disabled && <FooterNavigation selected={selected} />}
    </View>
  );
}
