import React, {useRef} from 'react';
import {Animated, Dimensions, View} from 'react-native';
import {
  PanGestureHandler,
  PinchGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export function ImageCropper() {
  const animationTime = 1000;

  const x = new Animated.Value(0);
  const xAnim = useRef(x).current;

  const y = new Animated.Value(0);
  const yAnim = useRef(y).current;

  const scale = new Animated.Value(1);
  const scaleAnim = useRef(scale).current;

  const initial = {x: 0, y: 0, scale: 1};
  const current = {scale: 1};

  const getLocalX = e => e.nativeEvent.absoluteX / current.scale / width;
  const getLocalY = e => e.nativeEvent.absoluteY / current.scale / width;

  const getLocalXWithOffset = e => getLocalX(e) - initial.x;
  const getLocalYWithOffset = e => getLocalY(e) - initial.y;

  function onPanBegan(e) {
    initial.x = e.nativeEvent.x / current.scale / width;
    initial.y = e.nativeEvent.y / current.scale / width;
  }

  function handlePan(e) {
    x.setValue(getLocalXWithOffset(e));
    y.setValue(getLocalYWithOffset(e));
  }

  function onPanEnd(e) {
    const clampedX = clamp(getLocalXWithOffset(e), -(1 - 1 / current.scale), 0);
    const clampedY = clamp(getLocalYWithOffset(e), -(1 - 1 / current.scale), 0);

    x.setValue(clampedX);
    y.setValue(clampedY);
    Animated.timing(xAnim, {
      toValue: clampedX,
      useNativeDriver: false,
      duration: animationTime,
    }).start();
    Animated.timing(yAnim, {
      toValue: clampedY,
      useNativeDriver: false,
      duration: animationTime,
    }).start();
  }

  function handlePinch(e) {
    const newScale = e.nativeEvent.scale;
    current.scale = initial.scale * newScale;
    scale.setValue(initial.scale * newScale);
  }

  function onPinchEnd(e) {
    const newScale = e.nativeEvent.scale;
    const clamped = clamp(initial.scale * newScale, 1, 4);
    current.scale = clamped;
    initial.scale = clamped;

    Animated.timing(scaleAnim, {
      toValue: clamped,
      useNativeDriver: false,
      duration: animationTime,
    }).start();
  }

  const panRef = useRef();
  const pinchRef = useRef();

  return (
    <View style={{width, height: width, overflow: 'hidden'}}>
      <GestureHandlerRootView>
        <PinchGestureHandler
          ref={pinchRef}
          onEnded={onPinchEnd}
          onGestureEvent={handlePinch}
          simultaneousHandlers={panRef}>
          <Animated.View style={{width, height: width}}>
            <PanGestureHandler
              ref={panRef}
              minDist={0}
              onBegan={onPanBegan}
              onEnded={onPanEnd}
              onGestureEvent={handlePan}
              simultaneousHandlers={pinchRef}>
              <Animated.Image
                source={require('../doge.jpg')}
                style={{
                  width: scaleAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, width],
                  }),
                  height: scaleAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, width],
                  }),
                  transform: [
                    {
                      translateX: Animated.multiply(
                        xAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, width],
                        }),
                        scaleAnim,
                      ),
                    },
                    {
                      translateY: Animated.multiply(
                        yAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, width],
                        }),
                        scaleAnim,
                      ),
                    },
                  ],
                }}
              />
            </PanGestureHandler>
          </Animated.View>
        </PinchGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
}
