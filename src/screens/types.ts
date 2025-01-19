import { WeatherCode } from '@src/assets/weatherIcon';

export type MarkerType = {
  latitude: number;
  longitude: number;
} | null;

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

export type WeatherDescription = {
  id: number;
  main: string;
  description: string;
  icon: WeatherCode;
};

export type WeatherResponse = {
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

export type CitySuggestion = {
  description: string;
  matched_substrings: string[];
  place_id: string;
  reference: string;
  structured_formatting: Record<string, unknown>;
  terms: string[];
  types: string[];
};
