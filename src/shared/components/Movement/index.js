import React from 'react';
import { Text, View } from 'react-native';
import FeedingIcon from '../../../assets/vectors/movements/test.svg';
import styles from './styles';

export function Movement() {

  return (
    <View style={styles.movementWrapper}>
      <View style={styles.information}>
        <FeedingIcon width={50} height={50} />
        <View style={styles.informationText}>
          <Text style={styles.category}>Feeding</Text>
          <Text style={styles.createdAt}>2 hours ago</Text>
        </View>
      </View>
      <Text style={styles.value}>-$20,000</Text>
    </View>
  );

}