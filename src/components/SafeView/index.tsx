import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export const SafeView: FC<PropsWithChildren> = ({ children }) => (
  <SafeAreaView style={safeViewStyle}>{children}</SafeAreaView>
);

const { safeViewStyle } = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    height: '100%',
  },
});
