import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { name } from './app.json';

function App() {
  return (
    <View>
      <Text>Hello world!</Text>
    </View>
  )
};

AppRegistry.registerComponent(name, () => App);
