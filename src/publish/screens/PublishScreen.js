import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PublishImagesScreen} from './PublishImagesScreen';
import {PublishDetailScreen} from './PublishDetailScreen';
import {PublishPriceScreen} from './PublishPriceScreen';
import {CameraScreen} from 'camera/CameraScreen';

const Publish = createNativeStackNavigator();

export function PublishScreen() {
  return (
    <Publish.Navigator>
      <Publish.Screen
        name="Images"
        component={PublishImagesScreen}
        options={{headerShown: false, animationEnabled: false}}
      />
      <Publish.Screen
        name="Detail"
        component={PublishDetailScreen}
        options={{headerShown: false, animationEnabled: false}}
      />
      <Publish.Screen
        name="Price"
        component={PublishPriceScreen}
        options={{headerShown: false, animationEnabled: false}}
      />
      <Publish.Screen
        name="Camera"
        component={CameraScreen}
        options={{headerShown: false, animationEnabled: false}}
      />
    </Publish.Navigator>
  );
}
