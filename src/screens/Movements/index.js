import React, { Fragment } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Movement } from '../../shared/components/Movement';
import { Percentages } from './components/Percentages';
import { Spent } from './components/Spent';
import styles from './styles';

export function Movements() {

  return (
    <Fragment>
      <TouchableOpacity style={styles.new} activeOpacity={.6}>
        <Text style={styles.newLabel}>Movement</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.pageContent}>
        <Text style={styles.pageTitle}>Movements</Text>
        <View style={styles.movement}>
          <Movement/>
        </View>
        <View style={styles.movement}> 
          <Movement/>
        </View>
        <View style={styles.movement}>
          <Movement/>
        </View>
        <View style={styles.movement}>
          <Movement/>
        </View>
        <View style={styles.movement}>
          <Movement/>
        </View>
        <Text style={styles.seeAll}>See all</Text>
        <View style={styles.spents}>
          <View style={styles.spent}>
            <Spent/>
          </View>
          <View style={styles.spent}>
            <Spent/>
          </View>
          <View style={styles.spent}>
            <Spent/>
          </View>
          <View style={styles.spent}>
            <Spent/>
          </View>
        </View>
        <View style={styles.percentages}>
          <Percentages/>
        </View>
      </ScrollView>
    </Fragment>
  );

}