import { StyleSheet } from 'react-native';
import { darkGray, lightGray } from '../../styles/variables';

export default StyleSheet.create({
  asideMenu: {
    position: 'absolute',
    elevation: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#0000024D'
  },
  links: {
    backgroundColor: 'white',
    width: '65%',
    height: '100%',
    justifyContent: 'center'
  },
  header: {
    position: 'absolute',
    top: (((20/3 + 5) * 3) + 30) + 45, // BG Menu dims + margin top
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15
  },
  headerText: {
    borderLeftWidth: 4,
    borderLeftColor: darkGray,
    paddingLeft: 7,
    marginLeft: 7,
    paddingVertical: 7
  },
  headerVerb: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerSlogan: {
    color: darkGray,
    fontSize: 14
  },
  menuLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    backgroundColor: lightGray,
    paddingVertical: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 15
  },
  linkText: {
    marginRight: 10,
    fontWeight: 'bold',
    color: darkGray,
    fontSize: 16
  },
  creds: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: darkGray
  },
  outside: {
    position: 'absolute',
    right: 0,
    width: '35%',
    height: '100%'
  }
})