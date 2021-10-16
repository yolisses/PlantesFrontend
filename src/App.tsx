import 'react-native-gesture-handler'; // prevent modal error
import './auth/configureGoogleSignIn'; // self explanatory
import './auth/trySavedLogin'; // After this one ^^^

import React from 'react';
import {Routes} from './Routes';
import {StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

import moment from 'moment/min/moment-with-locales';

import {ModalContextProvider} from 'modal/ModalContext';
import {Observer} from 'mobx-react-lite';

moment.locale('pt');

const queryClient = new QueryClient();

function App() {
  return (
    <Observer>
      {() => (
        <>
          <StatusBar barStyle={'default'} hidden={true} />
          <QueryClientProvider client={queryClient}>
            <ModalContextProvider>
              <Routes />
            </ModalContextProvider>
          </QueryClientProvider>
        </>
      )}
    </Observer>
  );
}

export default App;
