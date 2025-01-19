# Weather Map App

This React Native app allows users to view weather conditions for different cities on an interactive map. Users can tap on the map to add a marker and view the weather for the selected city. The app uses the [OpenWeather API](https://openweathermap.org/) to fetch weather data and [Google Maps](https://developers.google.com/maps/documentation/javascript) to display the map.

## Features:

- Display of an interactive map using `react-native-maps`.
- Adding markers on the map with a long press.
- Displaying the city name and weather for the selected location.
- Weather search by city using a search field.
- Fetching weather data using the [OpenWeather API](https://openweathermap.org/).
- Using the [Google Maps](https://developers.google.com/maps/documentation/javascript) to display the map.

## Technologies:

- **React Native**
- **React Navigation**
- **Axios** for HTTP requests
- **OpenWeather API**
- **Google Maps API**

## Setup:

1. Clone the repository:
   ```
   git clone https://github.com/MelnychenkoJenny/Wheather-forecast.git
   cd Wheather-forecast
   ```
2. Install dependencies:
 ```
yarn <npm><pnpm> install
   ```
3. Create a .env file in the root directory of the project and add your API keys:
```
GOOGLE_API_KEY=your_google_maps_api_key
OPENWEATHER_API_KEY=your_openweather_api_key
```
4. To run the project on Android:
 ```
yarn <npm><pnpm> start
   ```



   
