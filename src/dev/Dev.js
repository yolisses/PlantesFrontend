import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';

export function Dev() {
  useEffect(() => {
    MultipleImagePicker.openPicker();
  }, []);
  return <Text>oi</Text>;
}
