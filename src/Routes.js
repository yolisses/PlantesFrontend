import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faComments, faHome} from '@fortawesome/free-solid-svg-icons';

import {HomeScreen} from 'home/HomeScreen';
import {ChatsListScreen} from 'chat/ChatsListScreen';
import {PublishScreen} from 'publish/screens/PublishScreen';

import {AlertDisplay} from 'alert/AlertDisplay';
import {ModalDisplay} from 'modal/ModalDisplay';
import {HomeStackScreen} from 'home/HomeStackScreen';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          lazy: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#070',
          tabBarInactiveTintColor: '#a5a5a5',
          tabBarIcon: ({size, color}) => getIcon({route, size, color}),
        })}>
        {/* The order matter! */}
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Publish" component={PublishScreen} />
        <Tab.Screen name="Chats" component={ChatsListScreen} />
      </Tab.Navigator>
      <AlertDisplay />
      <ModalDisplay />
    </NavigationContainer>
  );
}

function getIcon({route, size, color}) {
  const routeIcon = {
    Home: faHome,
    Publish: faCamera,
    Chats: faComments,
  };
  let icon = routeIcon[route.name];
  return <FontAwesomeIcon icon={icon} size={size} color={color} />;
}
