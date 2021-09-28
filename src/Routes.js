import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Dev from './dev/Dev';
import {SendSomeImage} from 'dev/SendSomeImage';

import {MapScreen} from 'map/MapScreen';
import {ChatScreen} from 'chat/ChatScreen';
import {UserScreen} from 'user/UserScreen';
import {LoginScreen} from 'auth/LoginScreen';
import {HomeScreen} from 'home/HomeScreen';
import {ShowItemScreen} from 'show/ShowItemScreen';
import {ChatsListScreen} from 'chat/ChatsListScreen';
import {CommunityScreen} from 'post/CommunityScreen';

import {AlertDisplay} from 'alert/AlertDisplay';
import {ModalDisplay} from 'modal/ModalDisplay';

import {useUserContext} from 'auth/userContext';
import {CommentsScreen} from 'comment/CommentsScreen';
import {MapUserLocationButton} from 'map/MapUserLocationButton';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faComments, faHome} from '@fortawesome/free-solid-svg-icons';
import {PublishImagesScreen} from 'publish/screens/PublishImagesScreen';
import {PublishDetailScreen} from 'publish/screens/PublishDetailScreen';
import {PublishPriceScreen} from 'publish/screens/PublishPriceScreen';
import {CameraScreen} from 'camera/CameraScreen';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function mainRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const routeIcon = {
            Home: faHome,
            Images: faCamera,
            ChatsList: faComments,
          };
          return (
            <FontAwesomeIcon
              icon={routeIcon[route.name]}
              size={size}
              color={color}
            />
          );
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#080',
        tabBarInactiveTintColor: '#aaa',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Images" component={PublishImagesScreen} />
      <Tab.Screen name="ChatsList" component={ChatsListScreen} />
    </Tab.Navigator>
  );
}

export function Routes() {
  const {token} = useUserContext();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen
          name="development"
          component={Dev}
          options={{headerShown: false}}
        /> */}
        {token ? (
          <>
            {/* <Stack.Screen
              name="ChatsList"
              component={ChatScreen}
              options={{headerShown: false}}
            /> */}

            <Stack.Screen
              name="Main"
              component={mainRoutes}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="UserScreen"
              component={UserScreen}
              options={{headerTitle: '', headerShown: true}}
            />
            <Stack.Screen
              name="ShowItem"
              component={ShowItemScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen name="Chat" component={ChatScreen} />
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
            <Stack.Screen
              name="Map"
              component={MapScreen}
              options={{
                headerTitle: 'Mapa',
                headerRight: () => <MapUserLocationButton />,
              }}
            />
            <Stack.Screen
              name="Detail"
              component={PublishDetailScreen}
              options={{headerShown: false, animationEnabled: false}}
            />
            <Stack.Screen
              name="Price"
              component={PublishPriceScreen}
              options={{headerShown: false, animationEnabled: false}}
            />
            <Stack.Screen
              name="Camera"
              component={CameraScreen}
              options={{headerShown: false, animationEnabled: false}}
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
