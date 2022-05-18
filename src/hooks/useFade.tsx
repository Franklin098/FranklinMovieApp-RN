import {useRef} from 'react';
import {Animated} from 'react-native';

export function useFade() {
  // Value(initialValue)
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (callback?: () => void) => {
    // defining animation: changing from value 0 tovalue 1, in 1000 milisecods
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  const fadeOut = (duration: number = 300) => {
    // defining animation: changing from value 0 tovalue 1, in 1000 milisecods
    Animated.timing(opacity, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
}
