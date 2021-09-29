import 'react-native-gesture-handler'; // prevent modal error
import 'auth/configureGoogleSignIn'; // self explanatory

import React from 'react';
import {Routes} from './Routes';
import {StatusBar} from 'react-native';

import {AlertContextProvider} from 'alert/AlertContext';
import {ModalContextProvider} from 'modal/ModalContext';
import {SendingContextProvider} from 'send/SendingContext';
import {MessagesContextProvider} from 'chat/MessagesContext';
import {UsersByIdContextProvider} from 'common/UsersByIdContext';
import {ShallowDataContextProvider} from 'publish/ShallowDataContext';
import {PermissionsContextProvider} from 'permission/PermissionsContext';
import {CameraPreferencesProvider} from 'camera/contexts/CameraPreferencesContext';

const App = () => (
  <ShallowDataContextProvider>
    <PermissionsContextProvider>
      <AlertContextProvider>
        <ModalContextProvider>
          <UsersByIdContextProvider>
            <MessagesContextProvider>
              <CameraPreferencesProvider>
                <SendingContextProvider>
                  <StatusBar barStyle={'default'} hidden={true} />
                  <Routes />
                </SendingContextProvider>
              </CameraPreferencesProvider>
            </MessagesContextProvider>
          </UsersByIdContextProvider>
        </ModalContextProvider>
      </AlertContextProvider>
    </PermissionsContextProvider>
  </ShallowDataContextProvider>
);

export default App;
