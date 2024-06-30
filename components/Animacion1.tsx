import React, {FunctionComponent, useEffect, useState} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

const Animacion1: FunctionComponent = () => {
  const [animate] = useState<Animated.Value>(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animate, {
      toValue: 1, // valor a llegar
      duration: 500, // tiempó de duracion en llegar
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={{opacity: animate}}>
      <Text style={styles.text}>Animacion 1</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animacion1;
