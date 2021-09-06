import React, {useRef} from 'react';
import {Animated, Dimensions, Image} from 'react-native';
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

  const y = new Animated.Value(0);
  const yAnim = useRef(y).current;

  const scale = new Animated.Value(1);
  const scaleAnim = useRef(scale).current;

  const initial = {x: 0, y: 0, scale: 1};
  const current = {scale: 1};

  function handleGesture(e) {
    const {absoluteX} = e.nativeEvent;
    const normalizedX = absoluteX / current.scale / width;
    x.setValue(normalizedX - initial.x);

    const {absoluteY} = e.nativeEvent;
    const normalizedY = absoluteY / current.scale / width;
    y.setValue(normalizedY - initial.y);
  }

  function onBegan(e) {
    initial.x = e.nativeEvent.x / width;
    initial.y = e.nativeEvent.y / width;
  }

  function onPanEnd(e) {
    const {absoluteX, absoluteY} = e.nativeEvent;
    const normalizedX = absoluteX / current.scale / width;
    const normalizedY = absoluteY / current.scale / width;
    const clampedX = clamp(
      normalizedX - initial.x,
      -(1 - 1 / current.scale),
      0,
    );
    const clampedY = clamp(
      normalizedY - initial.y,
      -(1 - 1 / current.scale),
      0,
    );

    x.setValue(clampedX);
    y.setValue(clampedY);
    Animated.timing(xAnim, {
      toValue: clampedX,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(yAnim, {
      toValue: clampedY,
      duration: 500,
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
    current.scale = clamped;
    initial.scale = clamped;

    Animated.timing(scaleAnim, {
      toValue: clamped,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  const pinchRef = useRef();
  const panRef = useRef();

  return (
    <GestureHandlerRootView>
      <Animated.View
        style={{
          transform: [
            {
              translateX: Animated.multiply(
                xAnim,
                Animated.multiply(new Animated.Value(width), scaleAnim),
              ),
            },
            {
              translateY: Animated.multiply(
                yAnim,
                Animated.multiply(new Animated.Value(width), scaleAnim),
              ),
            },
          ],
        }}>
        <PinchGestureHandler
          ref={pinchRef}
          simultaneousHandlers={panRef}
          onGestureEvent={handlePinch}
          onEnded={onEndedPinch}>
          <PanGestureHandler
            ref={panRef}
            simultaneousHandlers={pinchRef}
            onGestureEvent={handleGesture}
            onEnded={onPanEnd}
            onBegan={onBegan}>
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
                  {
                    translateY: Animated.divide(
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
          </PanGestureHandler>
        </PinchGestureHandler>
      </Animated.View>
    </GestureHandlerRootView>
  );
}
