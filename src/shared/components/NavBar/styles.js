import { StyleSheet } from 'react-native';
import { lightGray } from '../../../core/constants/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 60,
    backgroundColor: lightGray
  },
  link: { padding: 15 }
})