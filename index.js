import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { name } from './app.json';
import { BurgerMenu } from './src/shared/components/BurgerMenu';

function App() {
  return (
    <View style={{ padding: 15 }}>
      <BurgerMenu/>
    </View>
  )
};

AppRegistry.registerComponent(name, () => App);
