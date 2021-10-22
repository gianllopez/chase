import React, { useEffect, useState } from 'react';
import { AppRegistry, View } from 'react-native';
import { name } from './app.json';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BurgerMenu } from './src/shared/components/BurgerMenu';
import { NavBar } from './src/shared/components/NavBar';
import { Home, Movements, Goals } from './src/screen';

const Stack = createNativeStackNavigator();

function App() {
  
  const [route, setRoute] = useState('home');

  const navRef = useNavigationContainerRef();

  useEffect(() => {
    navRef.addListener('state', () => {
      let { name } = navRef.getCurrentRoute();
      setRoute(name);
    });
    return () => navRef.removeListener('state');
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <BurgerMenu/>
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
        <NavBar currentRoute={route}/>
      </NavigationContainer>
    </View>
  )

};

AppRegistry.registerComponent(name, () => App);
