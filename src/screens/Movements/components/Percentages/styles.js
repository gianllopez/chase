import { StyleSheet } from 'react-native';
import { CATEGORIES } from '../../../../core/constants/colors';

export default StyleSheet.create({
  percentagesWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    height: 100,
    borderRadius: 8,
    overflow: 'hidden'
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionText: {
    fontFamily: 'TitilliumWeb-Bold',
    color: 'white',
    fontSize: 16,
  },
  sectionOne: {
    width: '53%',
    backgroundColor: CATEGORIES.clothes,
  },
  sectionTwo: {
    width: '26%',
    backgroundColor: CATEGORIES.feeding
  },
  sectionThree: {
    width: '11%',
    backgroundColor: CATEGORIES.livingPlace
  },
  sectionFour: {
    width: '11%',
    backgroundColor: CATEGORIES.transport,
  },
});