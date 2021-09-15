import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';

export function CameraOptionButton({icon, ...rest}) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7} style={{margin: 20}}>
      <FontAwesomeIcon icon={icon} color="white" size={25} />
    </TouchableOpacity>
  );
}
