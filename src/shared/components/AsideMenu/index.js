import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Animated, View, Text, TouchableOpacity } from 'react-native';
import { FontIcon } from '../../../assets/icons';
import { BurgerMenu } from '../BurgerMenu';
import styles from './styles';

const MenuLink = ({ label, icon, action }) => (
  <TouchableOpacity style={styles.menuLink} onPress={action} activeOpacity={.65}>
    <Text style={styles.linkText}>{ label }</Text>
    <FontIcon name={icon} size={25}/>
  </TouchableOpacity>
);

export function AsideMenu() {

  const [show, setShow] = useState(false);

  const anims = useRef({
    opacity: new Animated.Value(0),
    translate: new Animated.Value(0)
  }).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(anims.opacity, {
        toValue: show ? 1 : 0,
        duration: 250,
        useNativeDriver: true
      }),
      Animated.timing(anims.translate, {
        toValue: show ? 0 : -100,
        duration: 250,
        useNativeDriver: true
      })
    ]).start();
  }, [show]);

  return (
    <Fragment>
      <Animated.View pointerEvents={show ? 'auto' : 'none'} style={[styles.asideMenu, { opacity: anims.opacity }]}>    
        <Animated.View style={[styles.links, { transform: [{ translateX: anims.translate }] }]}>
          <MenuLink label="Reset all" icon="reset" color="red"/>
        </Animated.View>
        <TouchableOpacity style={styles.outside} onPress={() => setShow(false)}/>
      </Animated.View>
      <BurgerMenu menuState={show} onPress={() => setShow(!show)}/>
    </Fragment>
  )

}