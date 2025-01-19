import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App = (): React.JSX.Element => (
  <SafeAreaView style={safeViewStyle}>
    <Text>{'This is start screen. YuuuuuHuuuuu 🎉💖😎'}</Text>
  </SafeAreaView>
);

const { safeViewStyle } = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    height: '100%',
  },
});

export default App;
