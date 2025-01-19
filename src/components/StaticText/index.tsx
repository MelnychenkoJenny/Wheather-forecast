import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@src/styles';

export const StaticText = () => (
  <View style={wrapperStyle}>
    <Text style={textStyle}>{'location'}</Text>
  </View>
);

const { textStyle, wrapperStyle } = StyleSheet.create({
  wrapperStyle: {
    backgroundColor: colors.accent,
    borderRadius: 8,
    left: 170,
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'absolute',
    top: 15,
  },
  textStyle: {
    color: colors.defaultLight,
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
