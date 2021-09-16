import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler'; // prevent modal error

import {Routes} from './Routes';

import {UserContextProvider} from 'auth/userContext';
import {AlertContextProvider} from 'alert/AlertContext';
import {ModalContextProvider} from 'modal/ModalContext';
import {PublishContextProvider} from 'publish/PublishContext';
import {PermissionsContextProvider} from 'permission/PermissionsContext';
import {ChatReferenceContextProvider} from './chat/ChatReferenceContext';
import {CameraPreferencesProvider} from 'camera/contexts/CameraPreferencesContext';

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://192.168.10.23:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <PermissionsContextProvider>
          <AlertContextProvider>
            <ModalContextProvider>
              <PublishContextProvider>
                <ChatReferenceContextProvider>
                  <CameraPreferencesProvider>
                    <StatusBar barStyle={'default'} hidden={true} />
                    <Routes />
                  </CameraPreferencesProvider>
                </ChatReferenceContextProvider>
              </PublishContextProvider>
            </ModalContextProvider>
          </AlertContextProvider>
        </PermissionsContextProvider>
      </UserContextProvider>
    </ApolloProvider>
  );
};

export default App;
