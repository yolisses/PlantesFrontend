import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {rootReducer} from './rootReducer';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
