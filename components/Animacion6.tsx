import React, {FunctionComponent, useEffect, useState} from 'react';
import {Animated, StyleSheet, View, ViewStyle} from 'react-native';

const Animacion6: FunctionComponent = () => {
  const [animate1] = useState<Animated.Value>(new Animated.Value(0));
  const [animate2] = useState<Animated.Value>(new Animated.Value(-50));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animate2, {
          toValue: -30,
          duration: 0,
          useNativeDriver: false,
        }),
        Animated.timing(animate1, {
          toValue: 60,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animate2, {
          toValue: 30,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animate1, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animate2, {
          toValue: -30,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
    ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styleAnimate: ViewStyle = {
    transform: [{translateY: animate1}, {translateX: animate2}],
  };

  return (
    <View style={styles.content}>
      <Animated.View style={[styles.box, styleAnimate]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  box: {
    width: 10,
    height: 10,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animacion6;
