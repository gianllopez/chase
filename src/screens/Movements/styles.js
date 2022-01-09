import { StyleSheet } from 'react-native';
import { babyBlue } from '../../core/constants/colors';

export default StyleSheet.create({
  new: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: babyBlue,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  newLabel: {
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
    fontSize: 17,
    marginRight: 5,
    color: babyBlue,
  },
  pageContent: {
    marginTop: 90,
    marginHorizontal: 20,
  },
  pageTitle: {
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  movement: {
    marginBottom: 10,
  },
  seeAll: {
    fontFamily: 'TitilliumWeb-Bold',
    color: babyBlue,
    textAlign: 'center',
    fontSize: 15,    
  },
  spents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  spent: {
    width: '48%',
    marginTop: 10
  },
  percentages: {
    paddingBottom: 75
  }
});