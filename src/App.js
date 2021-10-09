import 'react-native-gesture-handler'; // prevent modal error
import 'auth/configureGoogleSignIn'; // self explanatory
import 'auth/trySavedLogin'; // After this one ^^^

import React from 'react';
import {Routes} from './Routes';
import {StatusBar} from 'react-native';

import {AlertContextProvider} from 'alert/AlertContext';
import {ModalContextProvider} from 'modal/ModalContext';
import {PermissionsContextProvider} from 'permission/PermissionsContext';
import {CameraPreferencesProvider} from 'camera/contexts/CameraPreferencesContext';
import moment from 'moment/min/moment-with-locales';
import {QueryClient, QueryClientProvider} from 'react-query';

moment.locale('pt');

const queryClient = new QueryClient();

const App = () => (
  <>
    <StatusBar barStyle={'default'} hidden={true} />
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

export default App;
