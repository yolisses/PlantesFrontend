import * as React from 'react';
import {ShowItemScreen} from 'show/ShowItemScreen';
import {HomeScreen} from './HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ShowItem" component={ShowItemScreen} />
    </HomeStack.Navigator>
  );
}
