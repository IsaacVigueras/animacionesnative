import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animacion7 from './components/Animacion7';

function App(): React.JSX.Element {
  return (
    <View style={styles.content}>
      <Animacion7 />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 100,
  },
});

export default App;
