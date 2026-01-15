const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherArr, wind } = weather;

  const condition = weatherArr[0];

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-2xl font-bold">{name}</h2>

      <img
        src={`http://openweathermap.org/img/wn/${condition.icon}@2x.png`}
        alt={condition.description}
        className="w-16 h-16 mx-auto"
      />

      <p className="text-lg capitalize">{condition.description}</p>

      <p className="text-3xl font-bold">{main.temp}°C</p>

      <p>Humidity: {main.humidity}%</p>

      <p>Wind: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
