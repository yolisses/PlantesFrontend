import React from 'react';
import {Routes} from './Routes';
import {UserContextProvider} from 'auth/userContext';
import {PermissionsContextProvider} from 'permission/PermissionsContext';
import {ImageGroupContextProvider} from 'camera/ImageGroupContext';
import {AlertContextProvider} from 'alert/AlertContext';
import {ModalContextProvider} from 'modal/ModalContext';

const App = () => {
  return (
    <UserContextProvider>
      <PermissionsContextProvider>
        <ImageGroupContextProvider>
          <AlertContextProvider>
            <ModalContextProvider>
              <Routes />
            </ModalContextProvider>
          </AlertContextProvider>
        </ImageGroupContextProvider>
      </PermissionsContextProvider>
    </UserContextProvider>
  );
};

export default App;
