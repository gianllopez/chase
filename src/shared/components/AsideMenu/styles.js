import { StyleSheet } from "react-native";
import { darkGray, lightGray, normalGray } from "../../styles/variables";

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
  menuLink: {
    width: '90%',
    backgroundColor: lightGray,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  linkText: {
    fontWeight: 'bold',
    color: darkGray,
    fontSize: 16
  },
  outside: {
    position: 'absolute',
    right: 0,
    width: '35%',
    height: '100%'
  }
})