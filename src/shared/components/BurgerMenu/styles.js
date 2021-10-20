import { StyleSheet } from 'react-native';
import variables from '../../styles/variables';

export default StyleSheet.create({
  burgerMenu: {
    width: 40,
    height: (20/3 + 5) * 3
  },
  line: {
    height: 20/3,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: variables.commonGray
  },
  middleLine: {
    width: 40*0.75  
  }
})