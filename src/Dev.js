import React from 'react';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = (state = {}, action) => {
  if (action.type === 'SET_NAME') {
    return {...state, name: action.name};
  }
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};

import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {Text, TouchableOpacity} from 'react-native';

import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

// ... normal setup, create store and persistor, import components etc.

const {store, persistor} = configureStore();

const RootComponent = () => {
  const dispatcher = useDispatch();
  const selector = useSelector(state => state);

  return (
    <TouchableOpacity
      onPress={() =>
        dispatcher({type: 'SET_NAME', name: 'Macaxeira' + Math.random()})
      }>
      <Text>Oi</Text>
      <Text>{JSON.stringify(selector)}</Text>
    </TouchableOpacity>
  );
};

export function Dev() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
}
