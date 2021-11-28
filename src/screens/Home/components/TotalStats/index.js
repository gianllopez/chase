import React, { useCallback } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import IncomeIcon from '../../../../assets/vectors/income.svg';
import ExpendituresIcon from '../../../../assets/vectors/expenditures.svg';
import { styles } from './styles';

export function TotalStats({ isIncome, value }) {

  let Icon = isIncome ? IncomeIcon : ExpendituresIcon,
  totalWhat = isIncome ? 'Incomes' : 'Expenditures';

  const pressHandler = useCallback(() => {
    Alert.alert(
      `My ${totalWhat.toLowerCase()}`,
      `All the logged money is $${value.toString()}`
    );
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={pressHandler}
      style={[styles.totalStat, { marginRight: isIncome ? 10 : 0 }]}
    >
      <Icon width={40} height={80} />
      <View style={styles.textWrapper}>
        <Text style={styles.statType}>{totalWhat}</Text>
        <Text style={styles.statValue}>${value}</Text>
      </View>
    </TouchableOpacity>
  );

}