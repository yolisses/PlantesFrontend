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
import {PublishPriceScreen} from 'publish/screens/PublishPriceScreen';
import {PublishImagesScreen} from 'publish/screens/PublishImagesScreen';
import {PublishDetailScreen} from 'publish/screens/PublishDetailScreen';
import {RequestLocationPermissionScreen} from 'permission/RequestLocationPermissionScreen';

import {ChatHeader} from 'chat/ChatHeader';
import {AlertDisplay} from 'alert/AlertDisplay';
import {ModalDisplay} from 'modal/ModalDisplay';
import {DiscardButton} from 'publish/DiscardButton';
import {UserRoundImage} from 'common/UserRoundImage';

import {useUserContext} from 'auth/userContext';
import {CommentsScreen} from 'comment/CommentsScreen';
import {useImageGroup} from 'camera/ImageGroupContext';
import {usePermissions} from 'permission/PermissionsContext';
import {MapUserLocationButton} from 'map/MapUserLocationButton';
import {Test} from 'src/publish/ImageCropper';

const Stack = createNativeStackNavigator();

export function Routes() {
  const {user} = useUserContext();
  const {grantedLocation} = usePermissions();

  const {images} = useImageGroup();
  const thereIsSomeImage = images?.length > 0;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="development"
          component={PublishImagesScreen}
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
            {!thereIsSomeImage ? (
              <Stack.Screen
                name="Publish"
                component={PublishScreen}
                options={{headerTitle: 'Publicar', animation: 'none'}}
              />
            ) : (
              <Stack.Screen
                name="Publish"
                component={PublishImagesScreen}
                options={{
                  headerTitle: 'Publicar',
                  headerRight: () => <DiscardButton />,
                }}
              />
            )}
            <Stack.Screen
              name="PublishImages"
              component={PublishImagesScreen}
              options={{
                headerTitle: 'Publicar',
                headerRight: () => <DiscardButton />,
              }}
            />
            <Stack.Screen
              name="PublishDetail"
              component={PublishDetailScreen}
              options={{headerTitle: 'Publicar'}}
            />
            <Stack.Screen
              name="PublishPrice"
              component={PublishPriceScreen}
              options={{headerTitle: 'Publicar'}}
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
              options={{title: 'Conversas'}}
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
