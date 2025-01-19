import React from 'react';
import { Button, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { SafeView } from '@components';
import { NavigationProps } from '@navigation';

export const SearchScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const onPress = () => navigation.navigate('StartScreen');

  return (
    <SafeView>
      <Text>{'👀👀🐱‍🚀This is search screen. YuuuuuHuuuuu'}</Text>
      <Button onPress={onPress} title={'Go HOME 🏡'} />
    </SafeView>
  );
};
