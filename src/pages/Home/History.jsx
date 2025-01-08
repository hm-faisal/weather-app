import useWeather from "../../hooks/useWeather";
import convertTemp from "../../utils/convertTemp";

const History = () => {
  const { weatherData, icon } = useWeather();
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold">Your Weather History</h3>
        <div className="flex justify-start items-center text-base bg-white rounded mt-2">
          <div className="text-center text-black mx-auto">
            {weatherData && (
              <img
                src={icon}
                alt={weatherData?.weather[0]?.description}
                className="mx-auto"
              />
            )}
          </div>
          <div className="mr-12 text-black ">
            <p className="font-bold text-sm">
              {weatherData?.name}, {weatherData?.sys?.country}
            </p>
            <p>{weatherData?.weather[0]?.description}</p>
          </div>
          <div className="">
            <p className="text-4xl min-w-28 text-black">
              {convertTemp(weatherData?.main?.temp).celsius.toFixed()}
              <sup>o</sup> C
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
