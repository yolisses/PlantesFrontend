import React, {useRef} from 'react';
import {Animated, Dimensions, Image, View} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PinchGestureHandler,
} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export function Test() {
  const x = new Animated.Value(0);
  const xAnim = useRef(x).current;

  const scale = new Animated.Value(1);
  const scaleAnim = useRef(scale).current;

  const initial = {x: 0, scale: 1};
  const current = {scale: 1};

  function handleGesture(e) {
    const {absoluteX} = e.nativeEvent;
    const normalizedX = absoluteX / current.scale / width;
    x.setValue(normalizedX - initial.x);
  }

  function onBegan(e) {
    initial.x = e.nativeEvent.x / width;
  }

  function onPanEnd(e) {
    const {absoluteX} = e.nativeEvent;
    const normalizedX = absoluteX / current.scale / width;
    const clamped = clamp(normalizedX - initial.x, -(1 - 1 / current.scale), 0);
    Animated.timing(xAnim, {
      toValue: clamped,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  function handlePinch(e) {
    const newScale = e.nativeEvent.scale;
    current.scale = initial.scale * newScale;
    scale.setValue(initial.scale * newScale);
  }

  function onEndedPinch(e) {
    const newScale = e.nativeEvent.scale;
    const clamped = clamp(initial.scale * newScale, 1, 4);
    initial.scale = clamped;
    current.scale = clamped;

    Animated.timing(scaleAnim, {
      toValue: clamped,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  const pinchRef = useRef();
  const panRef = useRef();

  return (
    <View
      style={{
        width,
        height: width,
        overflow: 'hidden',
        backgroundColor: '#ddd',
      }}>
      <GestureHandlerRootView>
        <Animated.View
          style={{
            height: '100%',
            transform: [
              {
                translateX: Animated.multiply(
                  xAnim,
                  Animated.multiply(new Animated.Value(width), scaleAnim),
                ),
              },
            ],
          }}>
          <PanGestureHandler
            ref={panRef}
            simultaneousHandlers={pinchRef}
            onGestureEvent={handleGesture}
            onEnded={onPanEnd}
            onBegan={onBegan}>
            <PinchGestureHandler
              ref={pinchRef}
              simultaneousHandlers={panRef}
              onGestureEvent={handlePinch}
              onEnded={onEndedPinch}>
              <Animated.View
                style={{
                  transform: [
                    {
                      scale: scaleAnim,
                    },
                    {
                      translateX: Animated.divide(
                        Animated.multiply(
                          new Animated.Value(width),
                          Animated.subtract(scaleAnim, new Animated.Value(1)),
                        ),
                        Animated.multiply(new Animated.Value(2), scaleAnim),
                      ),
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
            </PinchGestureHandler>
          </PanGestureHandler>
        </Animated.View>
      </GestureHandlerRootView>
    </View>
  );
}
