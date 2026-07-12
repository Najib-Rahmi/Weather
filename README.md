# Weather App

A modern, responsive React-based weather application built with Vite, featuring real-time weather data and 5-day forecasts using the OpenWeather API. The app offers a sleek glassmorphism UI design with Tailwind CSS.

## Features

- 🔍 Search weather by city name
- 📍 Auto-detect current location
- 🌡️ Display temperature, weather condition, humidity, and wind speed
- 📅 5-day weather forecast
- 🌤️ Weather icons
- ✨ Glassmorphism UI design
- 📱 Responsive design with Tailwind CSS
- 💾 Local storage for last searched city

## Tech Stack

- **Frontend**: React 19 (with Vite)
- **Routing**: React Router DOM
- **API**: OpenWeather API
- **HTTP**: Fetch API
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Prerequisites

- Node.js (version 18 or higher)
- pnpm package manager

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Najib-Rahmi/Weather.git
   cd Weather
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Get an API key**
   - Sign up at [OpenWeather](https://openweathermap.org/api)
   - Get your free API key

4. **Environment setup**
   - Create a `.env` file in the root directory
   - Add your API key:
     ```
     VITE_WEATHER_API_KEY=your_api_key_here
     ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## Available Scripts

- `pnpm run dev` - Start the development server
- `pnpm run build` - Build the app for production
- `pnpm run preview` - Preview the production build locally
- `pnpm run lint` - Run ESLint for code linting

## Usage

- Enter a city name in the search bar and click "Search"
- Click "Use Current Location" to get weather for your current position
- View current weather and 5-day forecast
- The app remembers your last searched city

## App States

The app includes several user-visible states that are worth showcasing:

- Initial load / default screen
- Search results with current weather
- 5-day forecast panel
- Error state when a city cannot be found
- Loading state while fetching data

## Screenshots

Place screenshots in the [docs/screenshots](docs/screenshots) folder and reference them here once captured.

- [Initial view](docs/screenshots/README.md)
- [Weather result](docs/screenshots/README.md)
- [Forecast view](docs/screenshots/README.md)
- [Error state](docs/screenshots/README.md)
- [Mobile view](docs/screenshots/README.md)

## Project Structure

```
src/
├── components/
│   ├── ErrorMessage.jsx
│   ├── Forecast.jsx
│   ├── Loader.jsx
│   ├── SearchBar.jsx
│   └── WeatherCard.jsx
├── pages/
│   └── Home.jsx
├── routes/
│   └── AppRoutes.jsx
├── services/
│   └── weatherApi.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## API Reference

This app uses the OpenWeather API. Make sure to:

- Keep your API key secure
- Respect the API rate limits (60 calls/minute for free tier)
- Handle API errors gracefully

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- Weather data provided by [OpenWeather](https://openweathermap.org/)
- Icons from OpenWeather API
- UI inspiration from glassmorphism design trends
