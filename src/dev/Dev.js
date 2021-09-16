import React from 'react';
import {Text, View} from 'react-native';

function ReceiveChildren({children}) {
  return (
    <View>
      <Text>
        {typeof children}
        {Array.isArray(children) ? 'is array' : 'is not array'}
      </Text>
      {children}
    </View>
  );
}

export function Dev() {
  return (
    <View>
      <ReceiveChildren>
        <Text>oi</Text>
      </ReceiveChildren>
      <ReceiveChildren>
        <Text>cachorro</Text>
        <Text>frio</Text>
      </ReceiveChildren>
    </View>
  );
}
