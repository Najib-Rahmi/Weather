import { useCallback, useEffect, useState } from "react";

import { fetchForecast, fetchWeather } from "../services/weatherApi";

export const useWeatherData = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = useCallback(async (query) => {
    setLoading(true);
    setError(null);
    setWeather(null);
    setForecast(null);

    try {
      const data = await fetchWeather(query);
      setWeather(data);

      if (typeof query === "string") {
        localStorage.setItem("lastCity", query);
      }

      const forecastData = await fetchForecast(data.coord.lat, data.coord.lon);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleSearch({ lat: latitude, lon: longitude });
        },
        () => {
          setError("Unable to get location. Please search for a city.");
        },
      );
    } else {
      setError("Geolocation not supported. Please search for a city.");
    }
  }, [handleSearch]);

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");

    if (lastCity) {
      handleSearch(lastCity);
    } else {
      getCurrentLocation();
    }
  }, [getCurrentLocation, handleSearch]);

  return {
    weather,
    forecast,
    loading,
    error,
    handleSearch,
    getCurrentLocation,
  };
};
