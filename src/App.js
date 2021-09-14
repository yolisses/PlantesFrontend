import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler'; // prevent modal error

import {Routes} from './Routes';

import {UserContextProvider} from 'auth/userContext';
import {AlertContextProvider} from 'alert/AlertContext';
import {ModalContextProvider} from 'modal/ModalContext';
import {PermissionsContextProvider} from 'permission/PermissionsContext';
import {ChatReferenceContextProvider} from './chat/ChatReferenceContext';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from 'global/configureStore';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://192.168.10.23:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <UserContextProvider>
            <PermissionsContextProvider>
              <AlertContextProvider>
                <ModalContextProvider>
                  <ChatReferenceContextProvider>
                    <StatusBar barStyle={'default'} hidden={true} />
                    <Routes />
                  </ChatReferenceContextProvider>
                </ModalContextProvider>
              </AlertContextProvider>
            </PermissionsContextProvider>
          </UserContextProvider>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
