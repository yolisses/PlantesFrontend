import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MapScreen} from 'map/MapScreen';
import {ChatScreen} from 'chat/ChatScreen';
import {UserScreen} from 'user/UserScreen';
import {LoginScreen} from 'auth/LoginScreen';
import {StoreScreen} from 'store/StoreScreen';
import {CameraScreen} from 'camera/CameraScreen';
import {ShowItemScreen} from 'show/ShowItemScreen';
import {ChatsListScreen} from 'chat/ChatsListScreen';
import {CommunityScreen} from 'post/CommunityScreen';
import {PublishScreen} from 'publish/screens/PublishScreen';
import {RequestLocationPermissionScreen} from 'permission/RequestLocationPermissionScreen';

import {ChatHeader} from 'chat/ChatHeader';
import {AlertDisplay} from 'alert/AlertDisplay';
import {ModalDisplay} from 'modal/ModalDisplay';
import {UserRoundImage} from 'common/UserRoundImage';

import {useUserContext} from 'auth/userContext';
import {CommentsScreen} from 'comment/CommentsScreen';
import {usePermissions} from 'permission/PermissionsContext';
import {MapUserLocationButton} from 'map/MapUserLocationButton';
import {Dev} from './Dev';

const Stack = createNativeStackNavigator();

export function Routes() {
  const {user} = useUserContext();
  const {grantedLocation} = usePermissions();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="development"
          component={Dev}
          options={{headerShown: false}}
        />
        {user ? (
          <>
            {grantedLocation || grantedLocation === null ? (
              <Stack.Screen
                name="Home"
                component={StoreScreen}
                options={{
                  headerTitle: 'Plantei',
                  headerRight: () => <UserRoundImage size={38} />,
                  animation: 'none',
                }}
              />
            ) : (
              <Stack.Screen
                name="Home"
                component={RequestLocationPermissionScreen}
                options={{
                  headerTitle: 'Plantei',
                  headerRight: () => <UserRoundImage size={36} />,
                }}
              />
            )}
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
              options={{headerTitle: ''}}
            />
            <Stack.Screen
              name="Camera"
              component={CameraScreen}
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
              options={{
                // headerTitle: 'Nome da pessoa',
                headerTitle: () => (
                  <ChatHeader
                    imageUri={'https://avatars.githubusercontent.com/yowlisses'}
                    name={'Ulisses Albuquerque'}
                  />
                ),
              }}
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
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
      <AlertDisplay />
      <ModalDisplay />
    </NavigationContainer>
  );
}
