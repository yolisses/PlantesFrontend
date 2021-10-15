import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {UserInfo} from './UserInfo';

export function AnimatedUserInfo({userInfoHeight, scrollY}) {
  const translateY = scrollY.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -1],
  });

  return (
    <Animated.View
      style={[styles.userAnimatedView, {transform: [{translateY}]}]}>
      <UserInfo height={userInfoHeight} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  userAnimatedView: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
});
