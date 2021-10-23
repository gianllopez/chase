import { StyleSheet } from 'react-native';
import { normalGray } from '../../styles/variables';

export default StyleSheet.create({
  burgerMenu: {
    position: 'absolute',
    elevation: 2,
    width: 40,
    height: (20/3 + 5) * 3,
    margin: 15    
  },
  line: {
    height: 20/3,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: normalGray
  },
  middleLine: {
    width: 40*0.75  
  }
})