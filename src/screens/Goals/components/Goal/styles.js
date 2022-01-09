import { StyleSheet } from 'react-native';
import { lightGray } from '../../../../core/constants/colors';

export default StyleSheet.create({
  goalWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: lightGray,
    padding: 10,
    paddingRight: 17,
    borderRadius: 8
  },
  goalInformation: {
    marginLeft: 7,
    flexGrow: 1
  },
  goalText: {
    fontFamily: 'TitilliumWeb-Bold',
  },
  title: {
    fontSize: 17,
    lineHeight: 19,
  },
  description: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 14,
    lineHeight: 16
  },
  value: {
    fontSize: 15,
    lineHeight: 18
  },
});