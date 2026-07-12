import WeatherCard from "../components/WeatherCard";

import Loader from "../components/Loader";

import ErrorMessage from "../components/ErrorMessage";

import Forecast from "../components/Forecast";

import WeatherHeader from "../components/WeatherHeader";

import WeatherActions from "../components/WeatherActions";

import { useWeatherData } from "../hooks/useWeatherData";

import { getBackgroundClass } from "../utils/weatherUtils";

function Home() {
  const { weather, forecast, loading, error, handleSearch, getCurrentLocation } =
    useWeatherData();

  const backgroundClass = getBackgroundClass(weather);

  return (
    <div
      className={`min-h-screen w-full p-4 md:p-6 flex items-center justify-center ${backgroundClass}`}>
      <div className="w-full max-w-6xl mx-auto bg-white/20 backdrop-blur rounded-2xl p-6 shadow-lg">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-4">
            <WeatherHeader />

            <WeatherActions
              onSearch={handleSearch}
              loading={loading}
              onUseCurrentLocation={getCurrentLocation}
            />

            {loading && <Loader />}

            {error && <ErrorMessage message={error} />}

            {weather && <WeatherCard weather={weather} />}
          </div>

          <div className="lg:pl-2">
            {forecast && <Forecast forecast={forecast} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
