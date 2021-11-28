import { Dimensions, StyleSheet } from 'react-native';

let wHeight = Dimensions.get('window');

export default StyleSheet.create({
  currency: {
    width: 35,
    height: 35,
    position: 'absolute',
    top: 15,
    right: 15
  },
  balanceWrapper: {
    marginTop: 100
  },
  balanceValue: {
    textAlign: 'center',
    fontSize: 35,
    color: 'black',
    fontFamily: 'TitilliumWeb-Bold'
  },
  balanceLabel: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 26,
    fontFamily: 'TitilliumWeb-Bold'
  },
  totalStats: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 15
  }
});
