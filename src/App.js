import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler'; // prevent modal error

import {Routes} from './Routes';

import {UserContextProvider} from 'auth/userContext';
import {AlertContextProvider} from 'alert/AlertContext';
import {ModalContextProvider} from 'modal/ModalContext';
import {ImageGroupContextProvider} from 'camera/ImageGroupContext';
import {PermissionsContextProvider} from 'permission/PermissionsContext';
import {ChatReferenceContextProvider} from './chat/ChatReferenceContext';

const App = () => {
  return (
    <UserContextProvider>
      <PermissionsContextProvider>
        <ImageGroupContextProvider>
          <AlertContextProvider>
            <ModalContextProvider>
              <ChatReferenceContextProvider>
                <StatusBar barStyle={'default'} hidden={true} />
                <Routes />
              </ChatReferenceContextProvider>
            </ModalContextProvider>
          </AlertContextProvider>
        </ImageGroupContextProvider>
      </PermissionsContextProvider>
    </UserContextProvider>
  );
};

export default App;
