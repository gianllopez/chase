import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export function Percentages() {

  return (
    <View style={styles.percentagesWrapper}>
      <View style={[styles.section, styles.sectionOne]}>
        <Text style={styles.sectionText}>53%</Text>
      </View> 
      <View style={[styles.section, styles.sectionTwo]}>
        <Text style={styles.sectionText}>26%</Text>
      </View>
      <View style={[styles.section, styles.sectionThree]}>
        <Text style={styles.sectionText}>11%</Text>
      </View>
      <View style={[styles.section, styles.sectionFour]}>
        <Text style={styles.sectionText}>11%</Text>
      </View>
    </View>
  );

}