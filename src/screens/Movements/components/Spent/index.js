import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export function Spent() {

  return (
    <View style={styles.spentWrapper}>
      <View style={styles.color}/>
      <View>
        <Text style={styles.category}>
          Clothes
        </Text>
        <Text style={styles.value}>
          $100,000
        </Text>
      </View>
    </View>
  );

}