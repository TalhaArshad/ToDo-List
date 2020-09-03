/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import MainScreen from './src/screens/TodoList';
import {StoreProvider} from 'easy-peasy';
import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <PersistGate persistor={persistor}>
      <StoreProvider store={store}>
        <MainScreen />
      </StoreProvider>
    </PersistGate>
  );
};

const styles = StyleSheet.create({});

export default App;
