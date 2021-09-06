import React, {useRef} from 'react';
import {View, Animated, StyleSheet, Dimensions} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

export function Test() {
  const translateX = new Animated.Value(0);
  const translateXAnim = useRef(translateX);

  const lastOffset = {x: 0, y: 0};

  const handlePan = Animated.event(
    [{nativeEvent: {translationX: translateX}}],
    {
      useNativeDriver: false,
    },
  );

  const moveTo = pos => {
    lastOffset.x = pos;
    translateX.setOffset(pos);
    Animated.timing(translateXAnim.current, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastOffset.x += event.nativeEvent.translationX;
      if (lastOffset.x > 0) {
        moveTo(0);
      } else if (lastOffset.x < -width) {
        moveTo(-width);
      } else {
        translateX.setOffset(lastOffset.x);
        translateX.setValue(0);
      }
    }
  };

  return (
    <View>
      <GestureHandlerRootView>
        <PanGestureHandler
          onGestureEvent={handlePan}
          onHandlerStateChange={handlerStateChange}>
          <Animated.View
            style={{
              //   backgroundColor: 'red',
              width: width * 2,
              transform: [{translateX: translateXAnim.current}],
            }}>
            <Animated.Image
              style={[styles.image]}
              source={require('../doge.jpg')}
            />
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    // opacity: 0.5,
    width: width * 2,
    height: width,
  },
});
