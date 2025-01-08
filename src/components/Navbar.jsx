import { NavLink } from "react-router-dom";
import logo from "./../assets/logo.png";

const Navbar = () => {
  return (
    <section className="text-white h-[97%] bg-[rgba(255,255,255,0.2)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] shadow-lg shadow-[rgba(0, 0, 0, 0.2)] rounded">
      <nav className="h-full px-12 py-5 flex flex-col justify-between">
        <img src={logo} alt="" className="self-center" />
        <ul className="relative space-y-5">
          <li className=" text-lg text-white leading-10  ">
            <NavLink
              to={"/"}
              className="flex items-center gap-3 hover:text-[#409ac7] cursor-pointer transition-all duration-300"
            >
              <ion-icon name="home-outline"></ion-icon>
              <span className="text-lg">Home</span>
            </NavLink>
          </li>
          <li className=" text-lg text-white leading-10 ">
            <NavLink
              to={""}
              className="flex items-center gap-3 hover:text-[#409ac7] cursor-pointer transition-all duration-300"
            >
              <ion-icon name="newspaper-outline"></ion-icon>
              <span className="text-lg ">Blogs</span>
            </NavLink>
          </li>
          <li className=" text-lg text-white leading-10 ">
            <NavLink
              to={""}
              className="flex items-center gap-3 hover:text-[#409ac7] cursor-pointer transition-all duration-300"
            >
              <ion-icon name="locate-outline"></ion-icon>
              <span className="text-lg ">Map</span>
            </NavLink>
          </li>
          <li className=" text-lg text-white leading-10 ">
            <NavLink
              to={""}
              className="flex items-center gap-3 hover:text-[#409ac7] cursor-pointer transition-all duration-300"
            >
              <ion-icon name="camera-outline"></ion-icon>
              <span className="text-lg ">Photos</span>
            </NavLink>
          </li>
          <li className=" text-lg text-white leading-10 ">
            <NavLink
              to={""}
              className="flex items-center gap-3 hover:text-[#409ac7] cursor-pointer transition-all duration-300"
            >
              <ion-icon name="videocam-outline"></ion-icon>
              <span className="text-lg ">Videos</span>
            </NavLink>
          </li>
          <li className=" text-lg text-white leading-10 ">
            <NavLink
              to={""}
              className="flex items-center gap-3 hover:text-[#409ac7] cursor-pointer transition-all duration-300"
            >
              <ion-icon name="call-outline"></ion-icon>
              <span className="text-lg ">Contact</span>
            </NavLink>
          </li>
        </ul>

        <ul className="relative">
          <li className=" text-lg text-white leading-10 ">
            <NavLink
              to={""}
              className="flex items-center gap-3 hover:text-[#409ac7] cursor-pointer transition-all duration-300"
            >
              <ion-icon name="home-outline"></ion-icon>
              <span className="text-lg ">Log Out</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
