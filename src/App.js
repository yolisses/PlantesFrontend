import 'react-native-gesture-handler'; // prevent modal error
import 'auth/configureGoogleSignIn'; // self explanatory

import React from 'react';
import {Routes} from './Routes';
import {StatusBar} from 'react-native';

import {AlertContextProvider} from 'alert/AlertContext';
import {ModalContextProvider} from 'modal/ModalContext';
import {SendingContextProvider} from 'send/SendingContext';
import {UsersByIdContextProvider} from 'common/UsersByIdContext';
import {PermissionsContextProvider} from 'permission/PermissionsContext';
import {CameraPreferencesProvider} from 'camera/contexts/CameraPreferencesContext';
import moment from 'moment/min/moment-with-locales';

moment.locale('pt');

const App = () => (
  <PermissionsContextProvider>
    <AlertContextProvider>
      <ModalContextProvider>
        <UsersByIdContextProvider>
          <CameraPreferencesProvider>
            <SendingContextProvider>
              <StatusBar barStyle={'default'} hidden={true} />
              <Routes />
            </SendingContextProvider>
          </CameraPreferencesProvider>
        </UsersByIdContextProvider>
      </ModalContextProvider>
    </AlertContextProvider>
  </PermissionsContextProvider>
);

export default App;
