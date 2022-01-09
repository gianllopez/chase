import { StyleSheet } from 'react-native';
import { CATEGORIES, lightGray } from '../../../../core/constants/colors';

export default StyleSheet.create({
  spentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 70,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: lightGray,
  },
  color: {
    backgroundColor: CATEGORIES.clothes,
    height: '130%',
    width: 10,
    marginRight: 7,
    borderRadius: 10,
  },
  category: {
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
    fontSize: 17,
    lineHeight: 19,
  },
  value: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 14,
    lineHeight: 16,
  }
});