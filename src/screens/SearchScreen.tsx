import React, { FC, useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Loader, SafeView } from '@components';
import { SearchScreenRouteProp } from '@navigation';
import search from '@src/assets/search.png';
import { WeatherIcon } from '@src/components/WeatherIcon';
import { contents } from '@src/constants';
import {
  fetchCityCoordinate,
  fetchCitySuggestions,
  fetchWeather,
} from '@src/network';
import { colors } from '@src/styles';
import { groupWeatherByDay } from '@src/tools';

import { CitySuggestion, WeatherByDay } from './types';

export const SearchScreen: FC<{
  route: SearchScreenRouteProp;
}> = ({ route: { params } }) => {
  const [city, setCity] = useState<string>(params?.city || '');
  const [citySuggestions, setCitySuggestions] = useState<CitySuggestion[]>([]);
  const [error, setError] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherByDay[]>([]);

  const getWeather = async () => {
    const responseWeather = await fetchWeather(
      params.latitude,
      params.longitude,
    );

    const dailyForecast = groupWeatherByDay(responseWeather);

    setWeatherData(dailyForecast);
  };

  useEffect(() => {
    if (params && params.latitude && params.longitude) {
      getWeather();
    }
  }, []);

  const getWeatherByCity = async () => {
    setCitySuggestions([]);

    if (!city) return;

    const cityCoordinate = await fetchCityCoordinate(city);

    if (cityCoordinate) {
      const { lat, lng } = cityCoordinate;
      const responseWeather = await fetchWeather(lat, lng);

      const dailyForecast = groupWeatherByDay(responseWeather);
      setWeatherData(dailyForecast);
    } else {
      setError(contents.errorMessage);
    }
  };

  const getCitySuggestions = async (query: string) => {
    setCity(query);
    setError('');

    if (query.length > 1) {
      const citySuggestionsResponse = await fetchCitySuggestions(query);
      setCitySuggestions(citySuggestionsResponse);
    } else {
      setCitySuggestions([]);
    }
  };

  return (
    <SafeView>
      <View style={container}>
        <View style={wrapper}>
          <TextInput
            onChangeText={getCitySuggestions}
            placeholder={contents.placeholder}
            style={inputStyle}
            value={city}
          />
          <TouchableOpacity
            style={buttonDeleteStyle}
            onPress={() => {
              setCity('');
              setCitySuggestions([]);
              setError('');
              setWeatherData([]);
            }}
          >
            <Text style={suggestionText}>{'X'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle} onPress={getWeatherByCity}>
            <Image
              alt={'Search button'}
              height={45}
              resizeMode={'stretch'}
              source={search}
              style={{ aspectRatio: 1, height: 45 }}
              width={45}
            />
          </TouchableOpacity>
        </View>
        {!!citySuggestions.length && (
          <FlatList
            data={citySuggestions}
            keyExtractor={(item) => item.place_id}
            style={suggestionItem}
            renderItem={({ item: { description } }) => (
              <Text
                style={suggestionText}
                onPress={() => {
                  setCity(description);
                  setCitySuggestions([]);
                }}
              >
                {description}
              </Text>
            )}
          />
        )}
        {!city && <Text style={textStyle}>{contents.instruction}</Text>}
        {weatherData.length !== 0 ? (
          <FlatList
            data={weatherData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={weatherItem}>
                <View style={weatherInfo}>
                  <Text style={dayText}>{item.dayOfWeek}</Text>
                </View>
                <Text style={tempText}>{`${Math.round(item.temp)}°C`}</Text>
                <WeatherIcon code={item.weatherIcon} />
              </View>
            )}
          />
        ) : (
          <Loader />
        )}
        {error && <Text style={textStyle}>{contents.errorMessage}</Text>}
      </View>
    </SafeView>
  );
};

const {
  buttonDeleteStyle,
  buttonStyle,
  container,
  dayText,
  inputStyle,
  suggestionItem,
  suggestionText,
  tempText,
  textStyle,
  weatherInfo,
  weatherItem,
  wrapper,
} = StyleSheet.create({
  buttonDeleteStyle: { position: 'absolute', right: 80, top: 13 },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: colors.defaultLight,
    borderRadius: 8,
    display: 'flex',
    elevation: 5,
    height: 55,
    minWidth: 60,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: colors.defaultDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  container: {
    padding: 20,
  },
  dayText: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '600',
  },
  inputStyle: {
    backgroundColor: colors.defaultLight,
    borderColor: colors.accent,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    fontSize: 20,
    height: 55,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 35,
    paddingVertical: 10,
    position: 'relative',
  },
  suggestionItem: {
    backgroundColor: colors.defaultLight,
    borderBottomColor: colors.accent,
    borderBottomWidth: 1,
    borderRadius: 8,
    elevation: 3,
    left: 20,
    padding: 15,
    position: 'absolute',
    shadowColor: colors.defaultDark,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    top: 80,
    width: 310,
    zIndex: 100,
  },
  suggestionText: {
    color: colors.text,
    fontSize: 18,
  },
  tempText: {
    color: colors.accent,
    fontSize: 30,
    fontWeight: '400',
    marginTop: 5,
  },
  textStyle: {
    color: colors.text,
    fontSize: 22,
    marginTop: 60,
    textAlign: 'center',
  },
  weatherInfo: {
    flex: 1,
  },
  weatherItem: {
    alignItems: 'center',
    backgroundColor: colors.defaultLight,
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    shadowColor: colors.defaultDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
});
