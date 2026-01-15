import { useMemo } from "react";

const Forecast = ({ forecast }) => {
  const dailyForecast = useMemo(() => {
    const list = forecast.list;

    const days = {};

    list.forEach((item) => {
      const date = new Date(item.dt * 1000).toDateString();

      if (!days[date]) {
        days[date] = [];
      }

      days[date].push(item);
    });

    return Object.entries(days)
      .slice(0, 5)
      .map(([date, items]) => {
        const temps = items.map((i) => i.main.temp);

        const min = Math.min(...temps);

        const max = Math.max(...temps);

        const condition = items[0].weather[0];

        return {
          date,

          min,

          max,

          condition,
        };
      });
  }, [forecast]);

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold mb-2">5-Day Forecast</h3>

      <div className="grid grid-cols-1 gap-2">
        {dailyForecast.map((day) => (
          <div
            key={day.date}
            className="bg-white p-2 rounded shadow flex items-center gap-2">
            <img
              src={`http://openweathermap.org/img/wn/${day.condition.icon}.png`}
              alt={day.condition.description}
              className="w-10 h-10"
            />

            <div>
              <p className="font-semibold">
                {new Date(day.date).toLocaleDateString("en", {
                  weekday: "short",
                })}
              </p>

              <p className="text-sm capitalize">{day.condition.description}</p>

              <p className="text-sm">
                {day.min.toFixed(1)}° / {day.max.toFixed(1)}°
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
