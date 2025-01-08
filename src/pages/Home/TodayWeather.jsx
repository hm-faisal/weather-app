import useWeather from "../../hooks/useWeather";
import convertTemp from "../../utils/convertTemp";

const TodayWeather = () => {
  const { weatherData, icon } = useWeather();
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="">
        <div className="text-center mx-auto">
          {weatherData && (
            <img
              src={icon}
              alt={weatherData?.weather[0]?.description}
              className="mx-auto"
            />
          )}
        </div>
        <div className="flex justify-start items-center text-base mt-4">
          <div className="mr-12">
            <p className="font-bold">
              {weatherData?.name}, {weatherData?.sys?.country}
            </p>
            <p>{weatherData?.weather[0]?.description}</p>
          </div>
          <div className="">
            <p className="text-4xl min-w-28">
              {convertTemp(weatherData?.main?.temp).celsius.toFixed()}
              <sup>o</sup> C
            </p>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default TodayWeather;
