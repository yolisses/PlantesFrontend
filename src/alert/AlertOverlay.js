import React from 'react';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import {useAlert} from 'alert/AlertContext';

export function AlertOverlay({children}) {
  const {setAlertActive} = useAlert();
  const onPress = () => {
    setAlertActive(false);
  };
  return (
    <Pressable onPress={onPress} style={styles.overlay}>
      {children}
    </Pressable>
  );
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width,
    height,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0008',
  },
});
