import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {TabSelector} from './TabSelector';

export function AnimatedTabSelector({userInfoHeight, scrollY}) {
  const translateY = scrollY.current.interpolate({
    inputRange: [0, userInfoHeight],
    outputRange: [0, -userInfoHeight],
    extrapolateRight: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.tabAnimatedView,
        {top: userInfoHeight},
        {transform: [{translateY}]},
      ]}>
      <TabSelector />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  tabAnimatedView: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
});
