import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

export function CameraOptionButton({image, ...rest}) {
  const size = 20;
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      <Image
        source={image}
        color="white"
        style={{
          margin: 20,
          height: size,
          width: size,
        }}
      />
    </TouchableOpacity>
  );
}
