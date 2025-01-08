import useWeather from "../hooks/useWeather";
const Header = () => {
  const { setLocation, weatherData } = useWeather();
  return (
    <>
      <section className="flex justify-between px-7 py-0 items-center bg-[rgba(255,255,255,0.2)] backdrop:blur-md -web border border-[rgba(255,255,255,0.2)] rounded h-full text-white shadow-lg shadow-[rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-4 text-lg">
          <ion-icon name="location-outline"></ion-icon>
          <p className="text-base">
            {weatherData?.name}, {weatherData?.sys?.country}{" "}
          </p>
        </div>
        <form
          className="flex items-center gap-4 text-base relative"
          onSubmit={(e) => {
            e.preventDefault();
            setLocation({ city: e.target.city.value });
            e.target.city.value = "";
          }}
        >
          <button
            className="absolute top-0 right-0 flex justify-center items-center p-4 cursor-pointer text-lg h-full"
            type="submit"
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <input
            type="text"
            placeholder="Search By City"
            name="city"
            className="w-max  bg-[rgba(0,0,0,0.1)] border-none px-4 py-2 rounded-md placeholder:text-white"
          />
        </form>
        <div className="flex items-center justify-between gap-4 text-xl *:cursor-pointer *:transition *:duration-300">
          <span className="hover:text-[#409ac7]">
            <ion-icon name="calendar-outline"></ion-icon>
          </span>
          <span className="hover:text-[#409ac7]">
            <ion-icon name="notifications-outline"></ion-icon>
          </span>
        </div>
      </section>
    </>
  );
};

export default Header;
