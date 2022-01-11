import React from 'react';
import { Text, View } from 'react-native';
import MoneyBagIcon from '../../../../assets/icons/ui/money-bag.svg';
import { Input } from '../../../../shared/components/Input';
import styles from './styles';

export function NewMovement() {

  return (
    <View style={styles.pageContainer}>
      <MoneyBagIcon width={130} height={130}/>
      <Text style={styles.headerTitle}>New movement</Text>
      <Text style={styles.headerSlogan}>Handle your money</Text>
      <View style={styles.inputs}>
        <View style={styles.input}>
          <Input placeholder="Select the movement category" isSelect/>
        </View>
        <View style={styles.input}>
          <Input placeholder="Amount"/>
        </View>
      </View>
    </View>
  );

}