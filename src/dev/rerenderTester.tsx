import React from 'react';
import {Text} from 'react-native';

export function RerenderTester() {
  return (
    <Text style={{color: 'purple'}}>{('' + Math.random()).slice(2, 5)}</Text>
  );
}
