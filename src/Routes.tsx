import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Observer} from 'mobx-react-lite';

import {AlertDisplay} from 'alert/AlertDisplay';
import {ModalDisplay} from 'modal/ModalDisplay';

import {EditScreen} from 'edit/EditScreen';
import {UserScreen} from 'user/UserScreen';
import {HomeScreen} from 'home/HomeScreen';
import {LoginScreen} from 'auth/LoginScreen';
import {ConfigScreen} from 'config/ConfigScreen';
import {ShowItemScreen} from 'show/ShowItemScreen';
import {PublishScreen} from 'publish/PublishScreen';
import {navigationRef} from 'navigation/RootNavigation';
import {EditProfileScreen} from 'profile/EditProfileScreen';
import {SelectImagesScreen} from 'images/SelectImagesScreen';
import {SelectLocationScreen} from 'map/SelectLocationScreen';
import {auth} from 'auth/auth';
import {alert} from 'alert/alert';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Purge = () => <></>;

function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={Purge}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Publish" component={PublishScreen} />
      <Tab.Screen name="UserScreen" component={UserScreen} />
    </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <Observer>
      {() => (
        <>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              {!auth.token ? (
                <Stack.Screen name="Login" component={LoginScreen} />
              ) : (
                <>
                  {/* <Stack.Screen name="dev" component={SelectImagesScreen} /> */}

                  <Stack.Screen name="default" component={Main} />
                  <Stack.Screen name="Edit" component={EditScreen} />
                  <Stack.Screen name="Config" component={ConfigScreen} />
                  <Stack.Screen name="ShowItem" component={ShowItemScreen} />
                  <Stack.Screen name="Images" component={SelectImagesScreen} />
                  <Stack.Screen
                    name="EditProfile"
                    component={EditProfileScreen}
                  />
                  <Stack.Screen
                    name="SelectLocation"
                    component={SelectLocationScreen}
                  />

                  <Tab.Screen name="Profile" component={UserScreen} />
                </>
              )}
            </Stack.Navigator>
            <ModalDisplay />
          </NavigationContainer>
        </>
      )}
    </Observer>
  );
}
