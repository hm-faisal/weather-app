import History from "./History";
import TodayHighlights from "./TodayHighlights";
import TodayWeather from "./TodayWeather";
const Home = () => {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-12 gap-2 h-[80vh]">
        <div className="text-white col-span-8 row-span-5 bg-bg rounded-md p-4">
          <TodayWeather />
        </div>
        <div className="text-white col-span-4 row-span-12  bg-bg rounded-md p-4">
          <History />
        </div>
        <div className="text-white col-span-8 row-span-7 bg-bg rounded-md p-4">
          <TodayHighlights />
        </div>
      </div>
    </>
  );
};

export default Home;
