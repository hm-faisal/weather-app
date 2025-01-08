import { useEffect, useState } from "react";
import useWeather from "../../hooks/useWeather";

const History = () => {
  const { weatherData } = useWeather();
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("Weather History")) || []
  );
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
            i !== history.length - 1 &&
            i < 5 && (
              <div
                className="bg-white rounded flex justify-center items-center flex-col mt-1 pb-2"
                key={i}
              >
                <div className="flex justify-start items-center text-base ">
                  <div className="text-center text-black mx-auto">
                    {weatherData && (
                      <img
                        src={item.icon}
                        alt={item?.description}
                        className="w-16 h-16"
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
                <p className="text-[rgba(0,0,0,0.4)] text-sm">
                  At: {item.time}
                </p>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default History;
