import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faHome, faUser} from '@fortawesome/free-solid-svg-icons';

import {Dev} from './dev/Dev';

import {auth} from 'auth/auth';
import {useObserver} from 'mobx-react-lite';

import {AlertDisplay} from 'alert/AlertDisplay';
import {ModalDisplay} from 'modal/ModalDisplay';

import {UserScreen} from 'user/UserScreen';
import {HomeScreen} from 'home/HomeScreen';
import {LoginScreen} from 'auth/LoginScreen';
import {EditScreen} from 'publish/EditScreen';
import {ConfigScreen} from 'config/ConfigScreen';
import {ShowItemScreen} from 'show/ShowItemScreen';
import {PublishScreen} from 'publish/PublishScreen';
import {UserRoundImage} from 'common/UserRoundImage';
import {EditProfileScreen} from 'profile/EditProfileScreen';
import {SelectImagesScreen} from 'publish/SelectImagesScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function getTabOptions({route}) {
  return {
    tabBarIcon: ({color, size}) => {
      const routeIcon = {
        Home: faHome,
        Publish: faCamera,
        UserScreen: faUser,
      };
      const icon = routeIcon[route.name];

      return route.name === 'UserScreen' ? (
        <UserRoundImage
          size={30}
          userId={auth.userId}
          image={auth.user?.image}
        />
      ) : (
        <FontAwesomeIcon icon={icon} size={27} color={color} />
      );
    },
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarActiveTintColor: 'green',
    tabBarInactiveTintColor: '#ddd',
  };
}

function Main() {
  return (
    <Tab.Navigator screenOptions={getTabOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Publish" component={PublishScreen} />
      <Tab.Screen name="UserScreen" component={UserScreen} />
    </Tab.Navigator>
  );
}

export function Routes() {
  return useObserver(() => (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!auth.token ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            {/* <Stack.Screen name="dev" component={PublishScreen} /> */}

            <Stack.Screen name="default" component={Main} />
            <Stack.Screen name="Edit" component={EditScreen} />
            <Stack.Screen name="Config" component={ConfigScreen} />
            <Stack.Screen name="ShowItem" component={ShowItemScreen} />
            <Stack.Screen name="Images" component={SelectImagesScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          </>
        )}
      </Stack.Navigator>
      <AlertDisplay />
      <ModalDisplay />
    </NavigationContainer>
  ));
}
