import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import MapView, {
  Callout,
  LongPressEvent,
  MapMarker,
  Marker,
} from 'react-native-maps';

import { SafeView, StaticText } from '@components';
import { fetchCityName, fetchDailyWeather } from '@src/network';
import { colors } from '@src/styles';

import { MarkerType, WeatherResponse } from './types';

export const StartScreen = () => {
  const [marker, setMarker] = useState<MarkerType>(null);
  const [city, setCity] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  const markerRef = useRef<MapMarker>(null);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.showCallout();
    }
  });

  const handleLongPress = async (event: LongPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarker({ latitude, longitude });

    const cityName = await fetchCityName(latitude, longitude);
    setCity(cityName);

    const weatherData = await fetchDailyWeather(latitude, longitude);
    setWeather(weatherData);
  };

  const handleCalloutPress = () => {
    Alert.alert('Callout Pressed', 'You clicked on the tooltip!');
  };

  const initialRegion = {
    latitude: 48.3794,
    longitude: 31.1656,
    latitudeDelta: 5,
    longitudeDelta: 5,
  };

  return (
    <SafeView>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={initialRegion}
        onLongPress={handleLongPress}
      >
        {marker && (
          <Marker ref={markerRef} coordinate={marker}>
            <Callout tooltip onPress={handleCalloutPress}>
              {city && weather ? (
                <View style={calloutContainer}>
                  <Text style={textCityStyle}>{city}</Text>
                  <Text style={textStyle}>
                    {`Weather: ${Math.round(weather?.main.temp)}°C`}
                  </Text>
                </View>
              ) : (
                <View style={calloutContainer}>
                  <Text style={textStyle}>{'Loading...⏳'}</Text>
                </View>
              )}
            </Callout>
          </Marker>
        )}
      </MapView>
      <StaticText />
    </SafeView>
  );
};

const { calloutContainer, textCityStyle, textStyle } = StyleSheet.create({
  calloutContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    gap: 10,
    height: 100,
    padding: 10,
    width: 150,
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.text,
    fontSize: 18,
  },
  textCityStyle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
  },
});
