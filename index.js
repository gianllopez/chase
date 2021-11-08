import React, { useEffect } from 'react';
import { AppRegistry, View } from 'react-native';
import { name } from './app.json';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BurgerMenu } from './src/shared/components/BurgerMenu';
import { NavBar } from './src/shared/components/NavBar';
import { Home, Movements, Goals } from './src/screens';
import { AsideMenu } from './src/shared/components/AsideMenu';

const Stack = createNativeStackNavigator();

function App() {

  const navRef = useNavigationContainerRef();

  return (
    <View style={{ flex: 1 }}>      
      <NavigationContainer ref={navRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
          <Stack.Screen name="home" component={Home}/>
          <Stack.Screen
            name="movements"
            component={Movements}
            options={{ animation: 'slide_from_left' }}
          />
          <Stack.Screen
            name="goals"
            component={Goals}
            options={{ animation: 'slide_from_right' }}
          />
        </Stack.Navigator>        
        <NavBar navigationRef={navRef}/>
      </NavigationContainer>
      <AsideMenu/>
    </View>
  )

};

AppRegistry.registerComponent(name, () => App);
