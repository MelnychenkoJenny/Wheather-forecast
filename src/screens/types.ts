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

interface MainWeather {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

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

export type Weather = {
  dt: number;
  dt_txt: string;
  main: MainWeather;
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather: WeatherDescription[];
  wind: WeatherWind;
};

export type AddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};

export type GeocodingResult = {
  address_components: AddressComponent[];
};

export type WeatherByDay = {
  dayOfWeek: string;
  temp: number;
  weatherIcon: WeatherCode;
};
