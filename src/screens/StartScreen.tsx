import React from 'react';
import { Button, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { SafeView } from '@components';
import { NavigationProps } from '@navigation';

export const StartScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const onPress = () => navigation.navigate('SearchScreen');

  return (
    <SafeView>
      <Text>{'🎉💖This is Start screen. YuuuuuHuuuuu 🙌✨❤'}</Text>
      <Button onPress={onPress} title={'Go to SearchScreen'} />
    </SafeView>
  );
};
