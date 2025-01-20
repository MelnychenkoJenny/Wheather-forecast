import React, { FC } from 'react';
import { Image } from 'react-native';

import { allWeathers } from '@src/assets/weatherIcon';
import { colors } from '@src/styles';

import { WeatherIconPropsType } from './types';

export const WeatherIcon: FC<WeatherIconPropsType> = ({ code }) => (
  <Image
    alt={'Weather icon'}
    width={40}
    resizeMode={'stretch'}
    source={code && allWeathers[code]}
    style={{ aspectRatio: 1.1, width: 40, tintColor: colors.accent }}
  />
);
