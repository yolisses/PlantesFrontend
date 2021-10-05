import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Dev} from './dev/Dev';

import {auth} from 'auth/auth';
import {useObserver} from 'mobx-react-lite';

import {AlertDisplay} from 'alert/AlertDisplay';
import {ModalDisplay} from 'modal/ModalDisplay';

import {UserScreen} from 'user/UserScreen';
import {HomeScreen} from 'home/HomeScreen';
import {LoginScreen} from 'auth/LoginScreen';
import {ConfigScreen} from 'config/ConfigScreen';
import {ShowItemScreen} from 'show/ShowItemScreen';
import {PublishScreen} from 'publish/PublishScreen';
import {EditProfileScreen} from 'profile/EditProfileScreen';
import {SelectImagesScreen} from 'publish/SelectImagesScreen';
import {EditScreen} from 'publish/EditScreen';

const Stack = createNativeStackNavigator();

export function Routes() {
  return useObserver(() => (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="dev" component={PublishScreen} />
        {/* <Stack.Screen name="dev" component={Dev} /> */}
        {!auth.token ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            {/* <Stack.Screen name="Dev" component={Dev} /> */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Edit" component={EditScreen} />
            <Stack.Screen name="Config" component={ConfigScreen} />
            <Stack.Screen name="Publish" component={PublishScreen} />
            <Stack.Screen name="UserScreen" component={UserScreen} />
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
