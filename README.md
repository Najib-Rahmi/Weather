# Weather App

A modern, responsive weather application built with React and Vite. It fetches live weather data and a 5-day forecast from the OpenWeather API and displays everything in a polished glassmorphism-style interface.

## Sun

<p align="center">
  <img src="public/screenshots/SunBackground.png" alt="SunBackground" width="700"/>
</p>

## Clouds

<p align="center">
  <img src="public/screenshots/CloudsBackground.png" alt="CloudsBackground" width="700"/>
</p>

## Rain

<p align="center">
  <img src="public/screenshots/RainBackground.png" alt="RainBackground" width="700"/>
</p>

## Snow

<p align="center">
  <img src="public/screenshots/SnowBackground.png" alt="SnowBackground" width="700"/>
</p>

## Features

- Search weather by city name
- Detect the user's current location
- Show temperature, condition, humidity, and wind speed
- Display a 5-day forecast
- Use weather icons for each condition
- Provide a responsive, centered glass UI
- Remember the last searched city in local storage
- Handle loading, error, and empty states gracefully

## Tech Stack

- Frontend: React 19
- Build tool: Vite
- Styling: Tailwind CSS v4
- Routing: React Router DOM
- API: OpenWeather API
- Package manager: pnpm

## Prerequisites

- Node.js 18 or higher
- An OpenWeather API key

## Setup

1. Clone the repository

   ```bash
   git clone "https://github.com/Najib-Rahmi/Weather.git"
   cd Weather
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Create an environment file

   ```bash
   cp .env.example .env
   ```

   Then add your key:

   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. Run the development server

   ```bash
   pnpm run dev
   ```

5. Open the app at `http://localhost:5173`

## Available Scripts

- `pnpm run dev` — start the development server
- `pnpm run build` — build the app for production
- `pnpm run preview` — preview the production build locally
- `pnpm run lint` — run ESLint

## Project Structure

```text
src/
├── components/
│   ├── ErrorBoundary.jsx
│   ├── ErrorMessage.jsx
│   ├── Forecast.jsx
│   ├── Loader.jsx
│   ├── SearchBar.jsx
│   ├── WeatherActions.jsx
│   ├── WeatherCard.jsx
│   └── WeatherHeader.jsx
├── constants/
│   └── weatherThemes.js
├── hooks/
│   └── useWeatherData.js
├── pages/
│   └── Home.jsx
├── routes/
│   └── AppRoutes.jsx
├── services/
│   └── weatherApi.js
├── utils/
│   └── weatherUtils.js
├── App.jsx
├── index.css
└── main.jsx
```

## App States

The app includes several important UI states:

- Initial screen
- Loading state
- Weather result view
- 5-day forecast panel
- Error state when a city is not found
- Mobile-friendly layout

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## Acknowledgments

- Weather data provided by OpenWeather
- Icons sourced from the OpenWeather API

<div align="center">

**Curious yet?**

[**WeatherApp.vercel.app**](https://WeatherApp.vercel.app)

</div>
