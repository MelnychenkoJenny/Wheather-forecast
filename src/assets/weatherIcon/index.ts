import cloud from './meteo-cloud.png';
import clouds from './meteo-clouds.png';
import fog from './meteo-fog.png';
import lightning from './meteo-lightning.png';
import rain from './meteo-rain.png';
import rainsun from './meteo-rainsun.png';
import snow from './meteo-snow.png';
import sun from './meteo-sun.png';
import suncloud from './meteo-suncloud.png';

export const allWeathers = {
  '01d': sun,
  '01n': sun,
  '02d': suncloud,
  '02n': suncloud,
  '03d': cloud,
  '03n': cloud,
  '04d': clouds,
  '04n': clouds,
  '09d': rain,
  '09n': rain,
  '10d': rainsun,
  '10n': rainsun,
  '11d': lightning,
  '11n': lightning,
  '13d': snow,
  '13n': snow,
  '50d': fog,
  '50n': fog,
};

export type WeatherCode =
  | '01d'
  | '01n'
  | '02d'
  | '02n'
  | '03d'
  | '03n'
  | '04d'
  | '04n'
  | '09d'
  | '09n'
  | '10d'
  | '10n'
  | '11d'
  | '11n'
  | '13d'
  | '13n'
  | '50d'
  | '50n';
