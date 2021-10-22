import React from 'react';
import { View } from 'react-native';
import { Link } from '@react-navigation/native';
import { FontIcon } from '../../../assets/icons';
import styles from './styles';

export function NavBar() {
  return (
    <View style={styles.container}>
      <Link to="/movements">
        <FontIcon name="movements" size={25}/>
      </Link>
      <Link to="/home">
        <FontIcon name="home" size={25}/>
      </Link>
      <Link to="/goals">
        <FontIcon name="goals" size={25}/>
      </Link>
    </View>
  )
}