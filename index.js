import React from 'react';
import { AppRegistry, View } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Goals, Home, Movements } from './src/screens';
import { AsideMenu } from './src/shared/components/AsideMenu';
import { NavBar } from './src/shared/components/NavBar';
import { name } from './app.json';
import { NewMovement } from './src/screens/Movements/screens/NewMovement';

const Stack = createNativeStackNavigator();

function App() {

  const navRef = useNavigationContainerRef();

  return (
    <View style={{ flexGrow: 1 }}>
      <NavigationContainer ref={navRef}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="new-movement"
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen
            name="movements"
            component={Movements}
            options={{ animation: 'slide_from_left' }}
          />
          <Stack.Screen
            name="new-movement"
            component={NewMovement}
            options={{ animation: 'slide_from_right' }}
          />
          <Stack.Screen
            name="goals"
            component={Goals}
            options={{ animation: 'slide_from_right' }}
          />
        </Stack.Navigator>
        <NavBar navigationRef={navRef} />
      </NavigationContainer>
      <AsideMenu />
    </View>
  );

};

AppRegistry.registerComponent(name, () => App);