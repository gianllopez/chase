import { StyleSheet } from 'react-native';
import { normalGray } from '../../styles/variables';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 60,
    backgroundColor: `${normalGray}26`,
  },
  link: { padding: 15 }
})