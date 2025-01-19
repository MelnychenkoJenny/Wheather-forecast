import { WeatherByDay, WeatherResponse } from '@src/screens/types';

export const groupWeatherByDay = (responseWeather: WeatherResponse[]) => {
  const weatherData = responseWeather.reduce(
    (acc: WeatherByDay[], item: WeatherResponse) => {
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
  return weatherData;
};
