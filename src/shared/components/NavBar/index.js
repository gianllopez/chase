import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Link } from '@react-navigation/native';
import { babyBlue, darkGray } from '../../styles/variables';
import { FontIcon } from '../../../assets/icons';
import styles from './styles';

export function NavBar({ navigationRef }) {

  const [currentRoute, setCurrentRoute] = useState('home');

  useEffect(() => {
    if (navigationRef.isReady()) {
      navigationRef.addListener('state', () => {
        let { name } = navigationRef.getCurrentRoute();
        setCurrentRoute(name);
      })
    }
  }, []);

  const getColor = route => (
    route === currentRoute ? babyBlue : darkGray
  );

  return (
    <View style={styles.container}>
      <Link to="/movements" style={styles.link}>
        <FontIcon
          name="movements"
          size={25}
          color={getColor('movements')}
        />
      </Link>
      <Link to="/home" style={styles.link}>
        <FontIcon
          name="home"
          size={25}
          color={getColor('home')}
        />
      </Link>
      <Link to="/goals" style={styles.link}>
        <FontIcon
          name="goals"
          size={25}
          color={getColor('goals')}
        />
      </Link>
    </View>
  )

}