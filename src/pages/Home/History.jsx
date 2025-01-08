import { useEffect, useState } from "react";
import useWeather from "../../hooks/useWeather";

const History = () => {
  const { weatherData } = useWeather();
  const [history, setHistory] = useState([]);
  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("Weather History")));
  }, [weatherData]);
  console.log(history);
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold">Your Weather History</h3>
        {history.map(
          (item, i) =>
            i > 0 && (
              <div
                className="flex justify-start items-center text-base bg-white rounded mt-2"
                key={i}
              >
                <div className="text-center text-black mx-auto">
                  {weatherData && (
                    <img
                      src={item.icon}
                      alt={item?.description}
                      className="mx-auto"
                    />
                  )}
                </div>
                <div className="mr-12 text-black ">
                  <p className="font-bold text-sm">
                    {item?.city}, {item?.country}
                  </p>
                  <p>{item?.description}</p>
                </div>
                <div className="">
                  <p className="text-4xl min-w-28 text-black">
                    {item.temp}
                    <sup>o</sup> C
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default History;
