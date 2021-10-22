import React from 'react';
import { View } from 'react-native';
import { FontIcon } from '../../../assets/icons';
import styles from './styles';

export function NavBar() {
  return (
    <View style={styles.container}>
      <FontIcon name="movements" size={25}/>
      <FontIcon name="home" size={25}/>
      <FontIcon name="goals" size={25}/>
    </View>
  )
}