import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { NavigationProps } from '@src/navigation';
import { colors } from '@src/styles';

import { TabItemBlockPropsType } from './types';

export const TabItemBlock: FC<TabItemBlockPropsType> = ({
  label,
  screenName,
}) => {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute();

  const onPress = () => navigation.navigate(screenName);

  const activeScreen = route.name === screenName;

  return (
    <TouchableOpacity
      style={[buttonStyle, activeScreen && activeButtonStyle]}
      onPress={onPress}
    >
      <Text style={[buttonTextStyle, activeScreen && activeTextStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const { activeButtonStyle, activeTextStyle, buttonStyle, buttonTextStyle } =
  StyleSheet.create({
    buttonStyle: {
      alignItems: 'center',
      backgroundColor: colors.defaultLight,
      borderRadius: 8,
      display: 'flex',
      elevation: 5,
      minWidth: 150,
      paddingHorizontal: 20,
      paddingVertical: 10,
      shadowColor: colors.defaultDark,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    activeButtonStyle: {
      backgroundColor: colors.accent,
      shadowColor: colors.accent,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      transform: [{ scale: 1.2 }],
    },
    buttonTextStyle: {
      color: colors.text,
      fontWeight: 600,
      fontSize: 16,
    },
    activeTextStyle: {
      color: colors.defaultLight,
    },
  });
