import useWeather from "../../hooks/useWeather";
import getFeelsLike from "../../utils/getFeelsLike";
import getCloudinessDescription from "../../utils/getCloudinessDescription";
import getHumidity from "../../utils/getHumidity";
import getWindSpeedDescription from "../../utils/getWindSpeedDescription";
import convertTemp from "../../utils/convertTemp";
import sunCloudy from "./../../assets/sun-cloudy.png";
import sunWindy from "./../../assets/sun-windy.png";
import compass from "./../../assets/compass.png";
import drops from "./../../assets/drops.png";

const TodayHighlights = () => {
  const { weatherData } = useWeather();
  const highlights = [
    {
      id: 1,
      image: compass,
      title: "Feel Like",
      value: getFeelsLike(
        weatherData?.main?.temp,
        weatherData?.main?.feels_like
      ),
      valueInNumber: convertTemp(weatherData?.main?.feels_like)?.celsius,
      valueInNumberUnit: <sup>o</sup>,
    },
    {
      id: 2,
      image: sunCloudy,
      title: "Cloud",
      value: getCloudinessDescription(weatherData?.clouds?.all),
      valueInNumber: weatherData?.clouds?.all,
      valueInNumberUnit: "%",
    },
    {
      id: 3,
      image: drops,
      title: "Humidity",
      value: getHumidity(weatherData?.main?.humidity),
      valueInNumber: weatherData?.main?.humidity,
      valueInNumberUnit: "%",
    },
    {
      id: 4,
      image: sunWindy,
      title: "Wind Speed",
      value: getWindSpeedDescription(weatherData?.wind?.speed),
      valueInNumber: weatherData?.wind?.speed,
      valueInNumberUnit: "Km/h",
    },
  ];
  return (
    <>
      <h2 className="text-4xl font-bold">Today&apos;s Highlights</h2>
      <div className="content grid grid-cols-2 mt-4 gap-2">
        {highlights.map((item) => (
          <div
            className="flex justify-between items-center flex-col-reverse md:flex-row bg-[#fff] p-4 rounded-md"
            key={item.id}
          >
            <div className="content flex justify-center items-center gap-2">
              <img src={item.image} alt="" className="h-12 w-12" />
              <div className="">
                <h4 className="text-[#000] font-bold">{item.title}</h4>
                <p className="text-[#6d6d6d] text-sm">{item.value}</p>
              </div>
            </div>
            <div className="number text-[#000] font-semibold">
              {item.valueInNumber?.toFixed()}
              {item.valueInNumberUnit}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodayHighlights;
