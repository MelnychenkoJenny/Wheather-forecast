export const BASE_URL_WEATHER = 'https://api.openweathermap.org/data/2.5/';
export const BASE_URL_MAP =
  'https://maps.googleapis.com/maps/api/geocode/json?';
export const BASE_URL_MAP_PLACE =
  'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=';

export const MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const initialRegion = {
  latitude: 48.3794,
  longitude: 31.1656,
  latitudeDelta: 15,
  longitudeDelta: 20,
};

export const contents = {
  errorMessage:
    "We couldn't find the weather for the city you entered. Please check the city name and try again. 😉",
  instruction:
    'Start entering the name of the city or country, select the desired one from the drop-down list, and press the 🔎 button.',
  placeholder: 'Type city name...',
};
