import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const layout = () => {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-12 gap-2 m-2 h-[100vh] w-[100hw]">
        <div className="row-span-12 col-span-2">
          <Navbar />
        </div>
        <div className="col-span-10 row-span-2">
          <Header />
        </div>
        <div className="col-span-10 row-span-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default layout;
