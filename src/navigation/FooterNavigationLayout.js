import React from 'react';
import {View} from 'react-native';
import {FooterNavigation} from 'navigation/FooterNavigation';

export function FooterNavigationLayout({children, selected, disabled, style}) {
  return (
    <View style={[{height: '100%'}, style]}>
      <View style={{flex: 1}}>{children}</View>
      {!disabled && <FooterNavigation selected={selected} />}
    </View>
  );
}
