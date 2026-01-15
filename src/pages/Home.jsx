import { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";

import WeatherCard from "../components/WeatherCard";

import Loader from "../components/Loader";

import ErrorMessage from "../components/ErrorMessage";

import Forecast from "../components/Forecast";

import { fetchWeather, fetchForecast } from "../services/weatherApi";

function Home() {
  const [weather, setWeather] = useState(null);

  const [forecast, setForecast] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const weatherBg = {
    Clear: "bg-gradient-to-br from-yellow-300 via-orange-400 to-rose-400",
    Clouds: "bg-gradient-to-br from-slate-500 via-gray-600 to-zinc-700",
    Rain: "bg-gradient-to-br from-blue-700 via-indigo-800 to-gray-900",
    Snow: "bg-gradient-to-br from-cyan-200 via-sky-300 to-blue-400",
    Night: "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]",
  };

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");

    if (lastCity) {
      handleSearch(lastCity);
    } else {
      getCurrentLocation();
    }
  }, []);

  const handleSearch = async (query) => {
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
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          handleSearch({ lat: latitude, lon: longitude });
        },

        () => {
          setError("Unable to get location. Please search for a city.");
        }
      );
    } else {
      setError("Geolocation not supported. Please search for a city.");
    }
  };

  return (
    <div
      className={`w-screen min-h-screen ${weatherBg[weather?.weather[0].main]}`}
      p-4>
      <div className="max-w-lg mx-auto bg-white/20 backdrop-blur rounded-lg p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-white">
          Weather App
        </h1>

        <SearchBar
          onSearch={handleSearch}
          loading={loading}
        />

        <button
          onClick={getCurrentLocation}
          className="mb-4 p-2 bg-green-500 text-white rounded w-full hover:bg-green-600 disabled:opacity-50"
          disabled={loading}>
          Use Current Location
        </button>

        {loading && <Loader />}

        {error && <ErrorMessage message={error} />}

        {weather && <WeatherCard weather={weather} />}

        {forecast && <Forecast forecast={forecast} />}
      </div>
    </div>
  );
}

export default Home;
