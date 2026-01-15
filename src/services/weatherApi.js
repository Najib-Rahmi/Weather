export const fetchWeather = async (query) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${
    import.meta.env.VITE_WEATHER_API_KEY
  }`;

  if (typeof query === "string") {
    url += `&q=${query}`;
  } else {
    url += `&lat=${query.lat}&lon=${query.lon}`;
  }

  const res = await fetch(url);

  if (!res.ok) throw new Error("Weather data not found");

  return res.json();
};

export const fetchForecast = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${
    import.meta.env.VITE_WEATHER_API_KEY
  }`;

  const res = await fetch(url);

  if (!res.ok) throw new Error("Forecast not found");

  return res.json();
};
