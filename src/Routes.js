import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Dev} from './dev/Dev';

import {auth} from 'auth/auth';
import {useObserver} from 'mobx-react-lite';

import {AlertDisplay} from 'alert/AlertDisplay';
import {ModalDisplay} from 'modal/ModalDisplay';

import {ChatScreen} from 'chat/ChatScreen';
import {UserScreen} from 'user/UserScreen';
import {HomeScreen} from 'home/HomeScreen';
import {LoginScreen} from 'auth/LoginScreen';
import {ConfigScreen} from 'config/ConfigScreen';
import {ShowItemScreen} from 'show/ShowItemScreen';
import {PublishScreen} from 'publish/PublishScreen';
import {ChatsListScreen} from 'chat/ChatsListScreen';
import {CommunityScreen} from 'post/CommunityScreen';
import {CommentsScreen} from 'comment/CommentsScreen';
import {EditProfileScreen} from 'profile/EditProfileScreen';
import {SelectImagesScreen} from 'publish/SelectImagesScreen';

const Stack = createNativeStackNavigator();

export function Routes() {
  return useObserver(() => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="dev"
          component={EditProfileScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="dev" component={ConfigScreen} /> */}
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
              name="UserScreen"
              component={UserScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Config"
              component={ConfigScreen}
              options={{title: 'Configurações'}}
            />
            <Stack.Screen
              name="Images"
              component={SelectImagesScreen}
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
              name="EditProfile"
              component={EditProfileScreen}
              options={{headerShown: false}}
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
