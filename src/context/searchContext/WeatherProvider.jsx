import moment from "moment";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import WeatherContext from "./WeatherContext";
import axios from "axios";
import convertTemp from "../../utils/convertTemp";

const API_KEY = "28c1f1292038dc316c99afca56117407";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState({ city: "dhaka,BD" });
  const [weatherData, setWeatherData] = useState(null);
  const icon = `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`;
  const [history, setHistory] = useState([]);

  localStorage.setItem("Weather History", JSON.stringify(history));

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (success) => setLocation(success.coords),
      () => {
        setLocation(location);
      }
    );
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      axios
        .get(`${BASE_URL}&lat=${location.latitude}&lon=${location.longitude}`)
        .then((res) => {
          setWeatherData(res.data);
        });

      return;
    }

    axios
      .get(`${BASE_URL}&q=${location.city}`)
      .then((res) => setWeatherData(res.data));

    return;
  }, [location]);

  useEffect(() => {
    setHistory([
      {
        icon,
        description: weatherData?.weather[0]?.description,
        city: weatherData?.name,
        country: weatherData?.sys?.country,
        temp: convertTemp(weatherData?.main?.temp).celsius.toFixed(),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
      },
      ...history,
    ]);
  }, [weatherData, icon]);

  const contextValue = {
    location,
    setLocation,
    weatherData,
    setWeatherData,
    icon,
  };
  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
WeatherProvider.propTypes = {
  children: PropTypes.object,
};

export default WeatherProvider;
