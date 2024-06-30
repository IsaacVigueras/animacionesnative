import React, {FunctionComponent, useEffect, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

const Animacion3: FunctionComponent = () => {
  const [animate] = useState<Animated.Value>(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animate, {
      toValue: 40, // valor a llegar
      duration: 500, // tiempó de duracion en llegar
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Animated.Text
        style={[
          styles.text,
          {
            fontSize: animate,
          },
        ]}>
        Animacion 1
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animacion3;
