import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler'; // prevent modal error

import {Routes} from './Routes';

import {UserContextProvider} from 'auth/userContext';
import {AlertContextProvider} from 'alert/AlertContext';
import {ModalContextProvider} from 'modal/ModalContext';
import {PermissionsContextProvider} from 'permission/PermissionsContext';
import {ChatReferenceContextProvider} from './chat/ChatReferenceContext';
import {CameraPreferencesProvider} from 'camera/contexts/CameraPreferencesContext';

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {ShallowDataContextProvider} from 'publish/ShallowDataContext';
import {ImagesContextProvider} from 'publish/ImagesContext';
import {SendingContextProvider} from 'send/SendingContext';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://192.168.10.23:4000/graphql',
  onError: ({networkError, graphQLErrors}) => {
    console.warn('graphQLErrors', graphQLErrors);
    console.warn('networkError', networkError);
  },
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ShallowDataContextProvider>
        <UserContextProvider>
          <PermissionsContextProvider>
            <AlertContextProvider>
              <ModalContextProvider>
                <ImagesContextProvider>
                  <ChatReferenceContextProvider>
                    <CameraPreferencesProvider>
                      <SendingContextProvider>
                        <StatusBar barStyle={'default'} hidden={true} />
                        <Routes />
                      </SendingContextProvider>
                    </CameraPreferencesProvider>
                  </ChatReferenceContextProvider>
                </ImagesContextProvider>
              </ModalContextProvider>
            </AlertContextProvider>
          </PermissionsContextProvider>
        </UserContextProvider>
      </ShallowDataContextProvider>
    </ApolloProvider>
  );
};

export default App;
