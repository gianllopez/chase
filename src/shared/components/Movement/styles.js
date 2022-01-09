import { StyleSheet } from 'react-native';
import { babyRed, lightGray } from '../../../core/constants/colors';

export default StyleSheet.create({
  movementWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: lightGray,
    padding: 10,
    borderRadius: 10,
  },
  information: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  informationText: {
    marginLeft: 5,
  },
  category: {
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
    fontSize: 17,
    lineHeight: 19,
  },
  createdAt: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 14,
    lineHeight: 16,
  },
  value: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 16,
    marginRight: 10,
    color: babyRed,
  },
});