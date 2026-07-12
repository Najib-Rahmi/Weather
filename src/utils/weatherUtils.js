import { DEFAULT_WEATHER_THEME, WEATHER_THEMES } from "../constants/weatherThemes";

export const getWeatherMain = (weather) => weather?.weather?.[0]?.main;

export const getBackgroundClass = (weather) => {
  const main = getWeatherMain(weather);
  return WEATHER_THEMES[main] || DEFAULT_WEATHER_THEME;
};
