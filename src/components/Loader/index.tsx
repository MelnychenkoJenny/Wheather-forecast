import React, { useEffect, useRef } from 'react';

import sun from '@src/assets/weatherIcon/sun.png';

import { Animated, StyleSheet, View } from 'react-native';

export const Loader = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          duration: 800,
          toValue: 1.2,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          duration: 800,
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={sun}
        style={[styles.icon, { transform: [{ scale: scaleAnim }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 60,
  },
  icon: {
    height: 100,
    width: 100,
  },
});
