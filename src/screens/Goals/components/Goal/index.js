import React from 'react';
import { Text, View } from 'react-native';
import FeedingIcon from '../../../../assets/icons/movements/test.svg';
import ArrowIcon from '../../../../assets/icons/ui/arrow.svg';
import CheckIcon from '../../../../assets/icons/ui/check.svg';
import styles from './styles';

export function Goal(props) {

  const { achieved } = props;

  return (
    <View style={styles.goalWrapper}>
      <FeedingIcon width={60} height={60}/>
      <View style={styles.goalInformation}>
        <Text style={[styles.goalText, styles.title]}>
          Gucci shirt
        </Text>
        <Text style={styles.description}>
          I've always wanted this one
        </Text>
        <Text style={[styles.goalText, styles.value]}>
          $300,000
        </Text>
      </View>
      { achieved ?
        <CheckIcon width={25} height={25}/> :
        <ArrowIcon width={17} height={17}/> }
    </View>
  );

}