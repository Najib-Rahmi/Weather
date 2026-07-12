import { useMemo } from "react";

const Forecast = ({ forecast }) => {
  const dailyForecast = useMemo(() => {
    if (!forecast?.list?.length) return [];

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
        const temps = items.map((i) => i.main?.temp ?? 0);

        const min = Math.min(...temps);

        const max = Math.max(...temps);

        const condition = items[0]?.weather?.[0] || {
          icon: "01d",
          description: "clear sky",
        };

        return {
          date,

          min,

          max,

          condition,
        };
      });
  }, [forecast]);

  return (
    <div className="lg:mt-0">
      <h3 className="text-xl font-bold mb-2">5-Day Forecast</h3>

      <div className="space-y-2 text-white">
        {dailyForecast.map((day) => (
          <div
            key={day.date}
            className="flex items-center justify-between border-b border-white/30 pb-2">
            <div className="flex items-center gap-3">
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

                <p className="text-sm capitalize opacity-80">
                  {day.condition.description}
                </p>
              </div>
            </div>

            <p className="text-sm font-medium">
              {day.min.toFixed(1)}° / {day.max.toFixed(1)}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
