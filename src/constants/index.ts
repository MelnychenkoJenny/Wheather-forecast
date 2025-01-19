export const BASE_URL_WEATHER = 'https://api.openweathermap.org/data/2.5/';
export const BASE_URL_MAP =
  'https://maps.googleapis.com/maps/api/geocode/json?';
export const MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const initialRegion = {
  latitude: 48.3794,
  longitude: 31.1656,
  latitudeDelta: 5,
  longitudeDelta: 5,
};
