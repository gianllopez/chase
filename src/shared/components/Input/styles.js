import { StyleSheet } from 'react-native';
import { darkGray, midGray } from '../../../core/constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    backgroundColor: midGray,
    borderRadius: 8,
  },
  input: {
    fontFamily: 'TitilliumWeb-Bold',
    paddingLeft: 15,
    fontSize: 16,
    height: '100%',
  },
  pickerPlaceholder: {
    color: darkGray,
    fontSize: 17,
  }
});