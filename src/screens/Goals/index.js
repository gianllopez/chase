import React, { Fragment } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { sharedStyles } from '../../shared/styles';
import { Goal } from './components/Goal';
import styles from './styles';

export function Goals() {
  
  return (
    <Fragment>
      <TouchableOpacity
        style={sharedStyles.newButton}
        activeOpacity={0.6}
      >
        <Text style={sharedStyles.newButtonLabel}>Goal</Text>
      </TouchableOpacity>
      <ScrollView
        style={sharedStyles.pageContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={sharedStyles.pageTitle}>Goals</Text>
        <View style={styles.goal}>
          <Goal/>
        </View>
        <View style={styles.goal}>
          <Goal/>
        </View>
        <View style={styles.goal}>
          <Goal/>
        </View>
        <Text style={styles.achievedLabel}>Achieved</Text>
        <View style={styles.goal}>
          <Goal achieved/>
        </View>
        <View style={styles.goal}>
          <Goal achieved/>
        </View>
      </ScrollView>
    </Fragment>
  );

}