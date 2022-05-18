import {View, Text, StyleSheet, Animated, Button} from 'react-native';
import React, {useRef} from 'react';
import {useFade} from '../hooks/useFade';

export default function FadeScreen() {
  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <View style={styles.mainContainer}>
      <Animated.View
        style={{...styles.subContainer, opacity: opacity}}></Animated.View>
      <Button title="Fade In" onPress={() => fadeIn()} />
      <Button title="Fade Out" onPress={() => fadeOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    backgroundColor: 'blue',
    width: 150,
    height: 150,
    borderColor: 'white',
    borderWidth: 10,
  },
});
