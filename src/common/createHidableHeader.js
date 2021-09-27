import React from 'react';
import {Animated, StyleSheet} from 'react-native';

export function createHidableHeader({
  headerHeight,
  duration = 150,
  threshold = 100,
  unsafeArea = 25,
}) {
  // must be outside the component or will be overwrited
  const initial = {value: 0, animating: false};
  const translateY = new Animated.Value(0);

  function move(pos, callback) {
    initial.animating = true;
    Animated.timing(translateY, {
      duration,
      toValue: pos,
      useNativeDriver: true,
    }).start(callback);
  }

  function onScroll(e) {
    if (initial.animating) {
      return;
    }
    const currentScroll = e.nativeEvent.contentOffset.y;
    const updateInitial = () => {
      initial.value = currentScroll;
      initial.animating = false;
    };
    if (currentScroll < unsafeArea) {
      move(0, updateInitial);
    } else if (currentScroll - initial.value > threshold) {
      move(-headerHeight, updateInitial);
    } else if (currentScroll - initial.value < -threshold) {
      move(0, updateInitial);
    }
  }

  return {
    onScroll,
    HidableHeader: ({children, style, ...rest}) => (
      <Animated.View
        {...rest}
        style={[styles.header, {transform: [{translateY}]}]}>
        {children}
      </Animated.View>
    ),
  };
}

const styles = StyleSheet.create({
  header: {
    zIndex: 10,
    width: '100%',
    position: 'absolute',
  },
});
