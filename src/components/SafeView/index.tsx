import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { FooterBlock } from '../FooterBlock';

export const SafeView: FC<PropsWithChildren> = ({ children }) => (
  <SafeAreaView style={safeViewStyle}>
    {children}
    <FooterBlock />
  </SafeAreaView>
);

const { safeViewStyle } = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    height: '100%',
  },
});
