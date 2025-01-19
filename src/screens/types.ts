import { WeatherCode } from '@src/assets/weatherIcon';

export type MarkerType = {
  latitude: number;
  longitude: number;
} | null;

export type WeatherMain = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

export type WeatherWind = {
  speed: number;
  deg: number;
  gust: number;
};

export type WeatherClouds = {
  all: number;
};

export type WeatherSys = {
  country: string;
  sunrise: number;
  sunset: number;
};

export type WeatherCoord = {
  lon: number;
  lat: number;
};

export type WeatherDescription = {
  id: number;
  main: string;
  description: string;
  icon: WeatherCode;
};

export type WeatherResponse = {
  coord: WeatherCoord;
  weather: WeatherDescription[];
  base: string;
  main: WeatherMain;
  visibility: number;
  wind: WeatherWind;
  clouds: WeatherClouds;
  dt: number;
  sys: WeatherSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type AddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};

export type GeocodingResult = {
  address_components: AddressComponent[];
};
