import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SearchScreen, StartScreen } from '@screens';

const Stack = createNativeStackNavigator();

export const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        key={'Start'}
        name={'StartScreen'}
        component={StartScreen}
      />
      <Stack.Screen
        key={'Search'}
        name={'SearchScreen'}
        component={SearchScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
