import React from 'react';

import { StyleSheet, View } from 'react-native';

import { colors } from '@src/styles';

import { TabItemBlock } from '../TabItemBlock';

export const FooterBlock = () => (
  <View style={footerStyle}>
    <TabItemBlock screenName={'StartScreen'} label={'Map'} />
    <TabItemBlock screenName={'SearchScreen'} label={'Search'} />
  </View>
);

const { footerStyle } = StyleSheet.create({
  footerStyle: {
    backgroundColor: colors.transparent,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    left: 0,
    paddingBottom: 15,
    position: 'absolute',
    right: 0,
  },
});
