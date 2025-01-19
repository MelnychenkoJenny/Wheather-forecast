import axios from 'axios';

import {
  BASE_URL_MAP,
  BASE_URL_MAP_PLACE,
  BASE_URL_WEATHER,
  MAP_API_KEY,
  WEATHER_API_KEY,
} from '@src/constants';

import { AddressComponent } from '@src/screens/types';

export const fetchCityName = async (
  latitude: number,
  longitude: number,
): Promise<string | null> => {
  try {
    const { data } = await axios.get(
      `${BASE_URL_MAP}latlng=${latitude},${longitude}&key=${MAP_API_KEY}`,
    );

    const addressComponents = data.results[0]?.address_components;

    const cityName = addressComponents?.find((component: AddressComponent) =>
      component.types.includes('locality'),
    )?.long_name;

    const countryName = addressComponents?.find((component: AddressComponent) =>
      component.types.includes('country'),
    )?.long_name;

    return cityName || countryName || 'Unknown Location';
  } catch (error) {
    console.error('Error fetching city name:', error);
    return null;
  }
};

export const fetchCityCoordinate = async (city: string) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL_MAP}address=${city}&key=${MAP_API_KEY}`,
    );

    const location = data.results[0]?.geometry.location;

    return location;
  } catch (error) {
    console.error('Error fetching city coordinates:', error);
  }
};

export const fetchCitySuggestions = async (query: string) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL_MAP_PLACE}${query}&key=${MAP_API_KEY}`,
    );

    return data.predictions;
  } catch (error) {
    console.error('Error fetching city suggestions:', error);
  }
};

export const fetchWeather = async (lat?: number, lng?: number) => {
  try {
    const { data } = await axios.get(
      // eslint-disable-next-line max-len
      `${BASE_URL_WEATHER}forecast?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`,
    );

    return data.list;
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
};
