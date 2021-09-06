import React, {useRef} from 'react';
import {Animated, Dimensions, Image} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PinchGestureHandler,
} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

export function Test() {
  let x = new Animated.Value(0);
  const scale = new Animated.Value(1);

  const scaleAnim = useRef(scale);

  const initial = {x: 0, scale: 1};
  const current = {scale: 1};

  function handleGesture(e) {
    const {absoluteX} = e.nativeEvent;
    const normalizedX = absoluteX / current.scale / width;
    // x = new Animated.Value(1).interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, 1],
    // });
    x.setValue(normalizedX - initial.x);
  }

  function onBegan(e) {
    initial.x = e.nativeEvent.x / width;
    // initial.x = 0;
    // console.error(initial.x);
  }

  function handlePinch(e) {
    const newScale = e.nativeEvent.scale;
    current.scale = initial.scale * newScale;
    scale.setValue(initial.scale * newScale);
  }

  function onEndedPinch(e) {
    const newScale = e.nativeEvent.scale;
    initial.scale = initial.scale * newScale;
  }

  return (
    <GestureHandlerRootView>
      <Animated.View
        style={{
          height: '100%',
          transform: [
            {
              translateX: Animated.multiply(
                x,
                Animated.multiply(new Animated.Value(width), scale),
              ),
            },
          ],
        }}>
        <PinchGestureHandler
          onGestureEvent={handlePinch}
          onEnded={onEndedPinch}>
          <PanGestureHandler onGestureEvent={handleGesture} onBegan={onBegan}>
            <Animated.View
              style={{
                transform: [
                  {
                    scale: scale,
                  },
                  {
                    translateX: Animated.divide(
                      Animated.multiply(
                        new Animated.Value(width),
                        Animated.subtract(scale, new Animated.Value(1)),
                      ),
                      Animated.multiply(new Animated.Value(2), scale),
                    ),
                    // (width * (current.scale - 1)) / (2 * current.scale),
                  },
                ],
              }}>
              <Image
                source={require('../doge.jpg')}
                style={{
                  width,
                  height: width,
                }}
              />
            </Animated.View>
          </PanGestureHandler>
        </PinchGestureHandler>
      </Animated.View>
    </GestureHandlerRootView>
  );
}
