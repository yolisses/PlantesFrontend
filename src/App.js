import 'react-native-gesture-handler'; // prevent modal error
import 'auth/configureGoogleSignIn'; // self explanatory
import 'auth/trySavedLogin'; // After this one ^^^

import React, {useEffect} from 'react';
import {Routes} from './Routes';
import {StatusBar} from 'react-native';

import {AlertContextProvider} from 'alert/AlertContext';
import {ModalContextProvider} from 'modal/ModalContext';
import {PermissionsContextProvider} from 'permission/PermissionsContext';
import {CameraPreferencesProvider} from 'camera/contexts/CameraPreferencesContext';
import moment from 'moment/min/moment-with-locales';
import {QueryClient, QueryClientProvider} from 'react-query';
import SplashScreen from 'react-native-splash-screen';

moment.locale('pt');

const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'#f9f9f9'}
        hidden={true}
      />
      <QueryClientProvider client={queryClient}>
        <PermissionsContextProvider>
          <AlertContextProvider>
            <ModalContextProvider>
              <CameraPreferencesProvider>
                <Routes />
              </CameraPreferencesProvider>
            </ModalContextProvider>
          </AlertContextProvider>
        </PermissionsContextProvider>
      </QueryClientProvider>
    </>
  );
}
