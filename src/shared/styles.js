import { StyleSheet } from 'react-native';
import { babyBlue } from '../core/constants/colors';

export const sharedStyles = StyleSheet.create({
  newButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: babyBlue,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  newButtonLabel: {
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
});