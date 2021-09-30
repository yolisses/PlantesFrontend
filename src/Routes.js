import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Dev} from './dev/Dev';

import {MapScreen} from 'map/MapScreen';
import {ChatScreen} from 'chat/ChatScreen';
import {UserScreen} from 'user/UserScreen';
import {LoginScreen} from 'auth/LoginScreen';
import {HomeScreen} from 'home/HomeScreen';
import {ShowItemScreen} from 'show/ShowItemScreen';
import {ChatsListScreen} from 'chat/ChatsListScreen';
import {CommunityScreen} from 'post/CommunityScreen';
import {PublishScreen} from 'publish/screens/PublishScreen';

import {AlertDisplay} from 'alert/AlertDisplay';
import {ModalDisplay} from 'modal/ModalDisplay';

import {CommentsScreen} from 'comment/CommentsScreen';
import {MapUserLocationButton} from 'map/MapUserLocationButton';
import {auth} from 'auth/auth';
import {useObserver} from 'mobx-react-lite';

const Stack = createNativeStackNavigator();

export function Routes() {
  return useObserver(() => (
    <NavigationContainer>
      <Stack.Navigator>
        {!auth.token ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        ) : (
          <>
            {/* <Stack.Screen name="Dev" component={Dev} /> */}
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Map"
              component={MapScreen}
              options={{
                headerTitle: 'Mapa',
                headerRight: () => <MapUserLocationButton />,
              }}
            />
            <Stack.Screen
              name="UserScreen"
              component={UserScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Publish"
              component={PublishScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Chat"
              component={ChatScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ChatsList"
              component={ChatsListScreen}
              options={{title: 'Conversas', headerLeft: () => <></>}}
            />
            <Stack.Screen
              name="ShowItem"
              component={ShowItemScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Comments"
              component={CommentsScreen}
              options={{title: 'Comentários'}}
            />
            <Stack.Screen
              name="Community"
              component={CommunityScreen}
              options={{title: 'Comunidade'}}
            />
          </>
        )}
      </Stack.Navigator>
      <AlertDisplay />
      <ModalDisplay />
    </NavigationContainer>
  ));
}
