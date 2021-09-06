import React, {useRef} from 'react';
import {Animated, Dimensions, View} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PinchGestureHandler,
} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function Test() {
  const x = new Animated.Value(0);
  const y = new Animated.Value(0);
  const scale = new Animated.Value(1);

  const xAnim = useRef(x).current;
  const yAnim = useRef(y).current;
  const scaleAnim = useRef(scale).current;
  const initial = {x: 0, y: 0, scale: 1};

  function onGestureEvent(e) {
    x.setValue(e.nativeEvent.absoluteX - initial.x);
    y.setValue(e.nativeEvent.absoluteY - initial.y);
  }

  function onGestureEventPinch(e) {
    scale.setValue(e.nativeEvent.scale * initial.scale);
  }

  function beganPan(e) {
    initial.x = e.nativeEvent.x;
    initial.y = e.nativeEvent.y;
  }

  function beganPinch(e) {
    Animated.timing(scaleAnim, {
      toValue: clamp(e.nativeEvent.scale * initial.scale, 1, 4),
      duration: 200,
      useNativeDriver: false,
    }).start();

    initial.scale = clamp(e.nativeEvent.scale * initial.scale, 1, 4);
  }

  function endedPan(e) {
    Animated.timing(xAnim, {
      toValue: clamp(e.nativeEvent.absoluteX - initial.x, width, 0),
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.timing(yAnim, {
      toValue: clamp(e.nativeEvent.absoluteY - initial.y, width, 0),
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  const pinchRef = useRef();
  const panRef = useRef();

  return (
    <View style={{width, height: width, overflow: 'hidden'}}>
      <GestureHandlerRootView>
        <Animated.View>
          <PinchGestureHandler
            ref={pinchRef}
            onEnded={beganPinch}
            simultaneousHandlers={panRef}
            onGestureEvent={onGestureEventPinch}>
            <PanGestureHandler
              ref={panRef}
              onBegan={beganPan}
              onEnded={endedPan}
              simultaneousHandlers={pinchRef}
              onGestureEvent={onGestureEvent}>
              <Animated.Image
                source={require('../doge.jpg')}
                style={{
                  width,
                  height: width,
                  backgroundColor: '#008',
                  borderRadius: 10,
                  transform: [
                    {scale: scaleAnim},
                    {translateX: xAnim},
                    {translateY: yAnim},
                  ],
                }}
              />
            </PanGestureHandler>
          </PinchGestureHandler>
        </Animated.View>
      </GestureHandlerRootView>
    </View>
  );
}
