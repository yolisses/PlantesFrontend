import React from 'react';
import {Text} from 'react-native';

export function RerenderTester() {
  return (
    <Text style={{color: 'purple'}}>
      {Math.random().toFixed(3).split('.')[1]}
    </Text>
  );
}
