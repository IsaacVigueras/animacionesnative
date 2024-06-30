import React, {FunctionComponent, useEffect, useState} from 'react';
import {Animated, StyleSheet, View, ViewStyle} from 'react-native';

const Animacion4: FunctionComponent = () => {
  const [animate] = useState<Animated.Value>(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animate, {
      toValue: 360, // valor a llegar
      duration: 500, // tiempó de duracion en llegar
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const interpolation = animate.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const styleAnimate: ViewStyle = {
    transform: [
      {
        rotate: interpolation,
      },
    ],
  };

  return (
    <View>
      <Animated.View style={[styles.box, styleAnimate]} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 10,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animacion4;
