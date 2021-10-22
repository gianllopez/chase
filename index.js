import React from 'react';
import { AppRegistry, View } from 'react-native';
import { name } from './app.json';
import { BurgerMenu } from './src/shared/components/BurgerMenu';
import { NavBar } from './src/shared/components/NavBar';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <BurgerMenu/>
      <NavBar/>
    </View>
  )
};

AppRegistry.registerComponent(name, () => App);
