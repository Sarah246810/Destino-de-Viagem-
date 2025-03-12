import React from 'react';
import { StatusBar } from 'react-native';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './src/firebase';
import Rotas from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content"/>
      <Rotas/>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App)


