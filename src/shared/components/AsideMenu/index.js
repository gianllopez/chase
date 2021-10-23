import React, { Fragment, useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import { BurgerMenu } from "../BurgerMenu";
import styles from "./styles";

export function AsideMenu() {

  const [show, setShow] = useState(false);

  const anims = useRef({
    menuOpacity: new Animated.Value(0),
    linksTranslate: new Animated.Value(0)
  }).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(anims.menuOpacity, {
        toValue: show ? 1 : 0,
        duration: 250,
        useNativeDriver: true
      }),
      Animated.timing(anims.linksTranslate, {
        toValue: show ? 0 : -100,
        duration: 250,
        useNativeDriver: true
      })
    ]).start();
  }, [show]);

  return (
    <Fragment>
      <Animated.View pointerEvents={show ? 'auto' : 'none'}
        style={[styles.asideMenu, { opacity: anims.menuOpacity }]}
      >
        <Animated.View style={[styles.links,
          { transform: [{ translateX: anims.linksTranslate }] }]}
        >

        </Animated.View>
      </Animated.View>
      <BurgerMenu onPress={() => setShow(!show)}/>
    </Fragment>
  )

}