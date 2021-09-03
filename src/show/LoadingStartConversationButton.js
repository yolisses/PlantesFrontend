import React from 'react';
import {View} from 'react-native';

export function LoadingStartConversetionButton({onPress}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'green',
        elevation: 2,
        margin: 10,
        height: 15,
        marginBottom: 20,
        borderRadius: 10,
      }}
    />
  );
}
