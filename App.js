import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/reducer/store'
import Routes from './src/routes'

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

