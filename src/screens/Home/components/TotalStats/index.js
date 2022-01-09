import React, { useCallback } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import ExpendituresIcon from '../../../../assets/icons/ui/expenditures.svg';
import IncomeIcon from '../../../../assets/icons/ui/income.svg';
import { styles } from './styles';

export function TotalStats({ isIncome, value }) {

  const Icon = isIncome ? IncomeIcon : ExpendituresIcon,
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