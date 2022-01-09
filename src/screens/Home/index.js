import React, { Fragment } from 'react';
import { Image, Text, View } from 'react-native';
import { Movement } from '../../shared/components/Movement';
import { TotalStats } from './components/TotalStats';
import styles from './styles';

const colombiaFlag = require('../../assets/images/colombia.png');

export function Home() {
  return (
    <Fragment>
      <Image style={styles.currency} source={colombiaFlag} />
      <View style={styles.balanceWrapper}>
        <Text style={styles.balanceValue}>$560,000</Text>
        <Text style={styles.balanceLabel}>Current balance</Text>
      </View>
      <View style={styles.totalStats}>
        <TotalStats value={750000} isIncome />
        <TotalStats value={190000} />
      </View>
      <View style={styles.movementsWrapper}>
        <Text style={styles.recentMovsLabel}>Recent movements</Text>
        <Movement />
      </View>
    </Fragment>
  );
}
