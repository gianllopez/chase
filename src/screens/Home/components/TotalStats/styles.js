import { StyleSheet } from 'react-native';
import { darkGray, lightGray } from '../../../../core/constants/colors';

export const styles = StyleSheet.create({
  totalStat: {
    height: 70,
    padding: 15,
    backgroundColor: lightGray,
    flex: 1,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textWrapper: {
    flex: 1,
    marginLeft: 5
  },
  statType: {
    lineHeight: 18,
    fontFamily: 'TitilliumWeb-Bold',
    color: darkGray,
  },
  statValue: {
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
    fontSize: 20,    
    lineHeight: 25,
    flexShrink: 1
  }
});
