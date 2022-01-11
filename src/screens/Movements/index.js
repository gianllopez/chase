import React, { Fragment, useCallback } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Movement } from '../../shared/components/Movement';
import { Percentages } from './components/Percentages';
import { Spent } from './components/Spent';
import { sharedStyles } from '../../shared/styles';
import styles from './styles';

export function Movements({ navigation }) {

  const goToNew = useCallback(() => {
    navigation.navigate('new-movement');
  }, []);

  return (
    <Fragment>
      <TouchableOpacity
        style={sharedStyles.newButton}
        activeOpacity={0.6}
        onPress={goToNew}
      >
        <Text style={sharedStyles.newButtonLabel}>Movement</Text>
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={sharedStyles.pageContent}
      >
        <Text style={sharedStyles.pageTitle}>Movements</Text>
        <View style={styles.movement}>
          <Movement />
        </View>
        <View style={styles.movement}>
          <Movement />
        </View>
        <View style={styles.movement}>
          <Movement />
        </View>
        <View style={styles.movement}>
          <Movement />
        </View>
        <View style={styles.movement}>
          <Movement />
        </View>
        <Text style={styles.seeAll}>See all</Text>
        <View style={styles.spents}>
          <View style={styles.spent}>
            <Spent />
          </View>
          <View style={styles.spent}>
            <Spent />
          </View>
          <View style={styles.spent}>
            <Spent />
          </View>
          <View style={styles.spent}>
            <Spent />
          </View>
        </View>
        <View style={styles.percentages}>
          <Percentages />
        </View>
      </ScrollView>
    </Fragment>
  );

}