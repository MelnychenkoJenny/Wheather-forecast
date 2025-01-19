import React, { FC, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { SafeView } from '@components';
import { SearchScreenRouteProp } from '@navigation';
import { fetchWeather } from '@src/network';

import { WeatherByDay } from './types';

export const SearchScreen: FC<{
  route: SearchScreenRouteProp;
}> = ({ route }) => {
  // const [city, setCity] = useState(route.params || {})
  const [coordinate, _] = useState(route.params || {});
  const [weatherData, setWeatherData] = useState<WeatherByDay[]>();

  const lat = coordinate.latitude;
  const lon = coordinate.longitude;

  const getWeather = async () => {
    const responseWeather = await fetchWeather(lat, lon);

    console.info('-----', responseWeather);
    const dailyForecast = responseWeather.reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (acc: WeatherByDay[], item: any) => {
        const date = new Date(item.dt_txt);
        const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });

        const existingDay = acc.find(
          (forecast) => forecast.dayOfWeek === dayOfWeek,
        );
        if (!existingDay) {
          acc.push({
            dayOfWeek,
            temp: item.main.temp,
            weatherIcon: item.weather[0].icon,
          });
        }

        return acc;
      },
      [],
    );

    setWeatherData(dailyForecast);
  };

  useEffect(() => {
    if (lat && lon) {
      getWeather();
    }
  }, [lat, lon]);

  return (
    <SafeView>
      <View style={container}>
        <TextInput
          style={input}
          placeholder={'Type city name...'}
          // value={city}
          // onChangeText={setCity}
        />
        {/* <Button title={'Search'} onPress={() => fetchWeather('Kyiv')} /> */}
        {weatherData && (
          <FlatList
            data={weatherData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={weatherItem}>
                <Text>{item.dayOfWeek}</Text>
                <Text>{`${Math.round(item.temp)}°C`}</Text>
              </View>
            )}
          />
        )}
      </View>
    </SafeView>
  );
};

const { container, input, weatherItem } = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  weatherItem: {
    backgroundColor: '#d3f4ff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
  },
});
