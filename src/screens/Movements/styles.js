import { StyleSheet } from 'react-native';
import { babyBlue } from '../../core/constants/colors';

export default StyleSheet.create({    
  movement: {
    marginBottom: 10,
  },
  seeAll: {
    fontFamily: 'TitilliumWeb-Bold',
    color: babyBlue,
    textAlign: 'center',
    fontSize: 15,    
  },
  spents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  spent: {
    width: '48%',
    marginTop: 10
  },
  percentages: {
    paddingBottom: 75
  }
});