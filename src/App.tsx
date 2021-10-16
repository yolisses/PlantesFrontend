import 'react-native-gesture-handler'; // prevent modal error
import './auth/configureGoogleSignIn'; // self explanatory
import './auth/trySavedLogin'; // After this one ^^^

import React from 'react';
import {Routes} from './Routes';
import {StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

import moment from 'moment/min/moment-with-locales';

import {AlertContextProvider} from 'alert/AlertContext';
import {ModalContextProvider} from 'modal/ModalContext';
import {CameraPreferencesProvider} from 'camera/contexts/CameraPreferencesContext';

moment.locale('pt');

const queryClient = new QueryClient();

const App = () => (
  <>
    <StatusBar barStyle={'default'} hidden={true} />
    <QueryClientProvider client={queryClient}>
      <AlertContextProvider>
        <ModalContextProvider>
          <CameraPreferencesProvider>
            <Routes />
          </CameraPreferencesProvider>
        </ModalContextProvider>
      </AlertContextProvider>
    </QueryClientProvider>
  </>
);

export default App;
