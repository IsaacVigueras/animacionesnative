import React, {FunctionComponent, useEffect, useState} from 'react';
import {Animated, StyleSheet, View, ViewStyle} from 'react-native';

const Animacion7: FunctionComponent = () => {
  const [animate1] = useState<Animated.Value>(new Animated.Value(0));
  const [animate2] = useState<Animated.Value>(new Animated.Value(1));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animate1, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.spring(animate2, {
        toValue: 60,
        useNativeDriver: false,
      }),
      Animated.spring(animate2, {
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(animate1, {
        toValue: 600,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styleAnimate: ViewStyle = {
    transform: [{translateY: animate1}, {scale: animate2}],
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
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animacion7;
