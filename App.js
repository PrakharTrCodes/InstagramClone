import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './src/reducer/store'
import Routes from './src/routes'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Routes />
      </PersistGate>
    </Provider>
  );
}

