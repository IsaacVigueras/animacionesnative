import React, {FunctionComponent, useEffect, useState} from 'react';
import {Animated, StyleSheet} from 'react-native';

const Animacion2: FunctionComponent = () => {
  const [animate] = useState<Animated.Value>(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animate, {
      toValue: 450, // valor a llegar
      duration: 1000, // tiempó de duracion en llegar
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={[
        styles.box,
        {
          width: animate,
          height: animate,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animacion2;
