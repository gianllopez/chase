import React from 'react';
import { Fragment } from 'react';
import { Image, Text, View } from 'react-native';
import { TotalStats } from './components/TotalStats';
import styles from './styles';

const colombiaFlag = require('../../assets/images/colombia.png')

export function Home() {
  return (
    <Fragment>
      <Image style={styles.currency} source={colombiaFlag}/>
      <View style={styles.balanceWrapper}>
        <Text style={styles.balanceValue}>
          $560,000
        </Text>
        <Text style={styles.balanceLabel}>
          Current balance
        </Text>
      </View>
      <View style={styles.totalStats}>
        <TotalStats value={750000} isIncome/>
        <TotalStats value={190000}/>
      </View>
    </Fragment>
  )
}