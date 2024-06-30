import React, {FunctionComponent, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

const Animacion5: FunctionComponent = () => {
  const [animate] = useState<Animated.Value>(new Animated.Value(1));

  const pressBtn = () => {
    Animated.spring(animate, {
      toValue: 0.8,
      useNativeDriver: false,
    }).start();
  };

  const outBtn = () => {
    Animated.spring(animate, {
      toValue: 1,
      useNativeDriver: false,
      friction: 1, // betwin more low more jump
      tension: 10,
    }).start();
  };

  const styleAnimated: ViewStyle = {
    transform: [
      {
        scale: animate,
      },
    ],
  };

  return (
    <View style={styles.content}>
      <TouchableWithoutFeedback
        onPressIn={() => pressBtn()}
        onPressOut={() => outBtn()}>
        <Animated.View style={[styles.btn, styleAnimated]}>
          <Text style={styles.text}>Iniciar sesion</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 28,
  },
});

export default Animacion5;
