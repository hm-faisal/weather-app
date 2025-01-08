import { useContext } from "react";
import WeatherContext from "../context/searchContext/WeatherContext";

const useWeather = () => {
  const weather = useContext(WeatherContext);
  return weather;
};

export default useWeather;
