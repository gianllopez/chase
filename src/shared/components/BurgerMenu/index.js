import React, { useEffect, useRef, useState } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import styles from './styles';

const { Value, parallel, timing, multiply } = Animated;

export function BurgerMenu({ onPress }) {

  const [open, setOpen] = useState(false);

  const animations = useRef({
    sidesTranslate: new Value(0),
    sidesRotate: new Value(0),
    middleOpacity: new Value(1)
  }).current;

  const toogleOpen = () => {
    onPress();
    setOpen(!open);
  };

  useEffect(() => {
    let { sidesTranslate, sidesRotate, middleOpacity } = animations;
    parallel([
      timing(sidesTranslate, {
        toValue: open ? 35/3 : 0,
        duration: 250,
        useNativeDriver: true
      }),
      timing(sidesRotate, {
        toValue: open ? 45 : 0,
        duration: 250,
        useNativeDriver: true
      }),
      timing(middleOpacity, {
        toValue: open ? 0 : 1,
        duration: 250,
        useNativeDriver: true
      })
    ]).start()
  }, [open]);

  const topDeg = animations.sidesRotate.interpolate({
    inputRange: [0, 45],
    outputRange: ['0deg', '45deg']
  });

  const bottomDeg = animations.sidesRotate.interpolate({
    inputRange: [0, 45],
    outputRange: ['0deg', '-45deg']
  });

  return (
    <TouchableOpacity style={styles.burgerMenu} onPress={toogleOpen} activeOpacity={1}>
      <Animated.View
        style={[
          styles.line,
          { transform: [
            { translateY: animations.sidesTranslate },
            { rotate: topDeg }
          ]}
        ]}
      />
      <Animated.View
        style={[
          styles.line,
          styles.middleLine,
          { opacity: animations.middleOpacity }
        ]}
      />
      <Animated.View
        style={[
          styles.line,
          { transform: [
            { translateY: multiply(animations.sidesTranslate, -1) },
            { rotate: bottomDeg }
          ]}
        ]}
      />
    </TouchableOpacity>
  );

}