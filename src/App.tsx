import { FaHouse, FaLayerGroup, FaMessage } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="relative bg-slate-800 w-full min-h-screen">
      <div className="">
        <nav className="absolute hidden md:block right-0 top-[50%] px-4 -translate-y-1/2 ">
          <div className="flex items-center  justify-center flex-col gap-4">
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                `p-3.5 rounded-full text-white  ${
                  isActive ? "bg-red-400" : "bg-gray-600"
                }`
              }
              to={"/"}
            >
              <FaHouse size={20} title="Home" />
            </NavLink>{" "}
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                `p-3.5 rounded-full text-white  ${
                  isActive ? "bg-red-400" : "bg-gray-600"
                }`
              }
              to={"/skills"}
            >
              <GiSkills size={20} title="Skills" />
            </NavLink>{" "}
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                `p-3.5 rounded-full text-white  ${
                  isActive ? "bg-red-400" : "bg-gray-600"
                }`
              }
              to={"/projects"}
            >
              <FaLayerGroup size={20} title="Projects" />
            </NavLink>{" "}
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                `p-3.5 rounded-full text-white  ${
                  isActive ? "bg-red-400" : "bg-gray-600"
                }`
              }
              to={"/contact"}
            >
              <FaMessage size={20} title="Contact" />
            </NavLink>
          </div>
        </nav>
        <nav className="flex  justify-evenly items-center   z-10 fixed bg-slate-600 w-full h-[60px] bottom-0 left-0 gap-3 md:hidden">
          <li className="list-none relative">
            <NavLink to={'/'}
              className={({ isActive }: { isActive: boolean }) =>
                `bottom relative flex flex-col items-center justify-center ${isActive ? 'active' :""}`
              }
             
            >
              <span className="icon">
                <div className="indicator"></div>
                <FaHouse/>
              </span>
              <span className="text">Home</span>
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to="/skills"
              className="bottom flex flex-col items-center justify-center"
            >
              <span className="icon">
                <div className="indicator"></div>
                <GiSkills/>
              </span>
              <span className="text">Skills</span>
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to="/projects"
              className="bottom flex flex-col items-center justify-center"
            >
              <span className="icon">
                <div className="indicator"></div>
               <FaLayerGroup/>
              </span>
              <span className="text">Projects</span>
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to="/contact"
              className="bottom flex flex-col items-center justify-center"
            >
              <span className="icon">
                <div className="indicator"></div>
               <FaMessage/>
              </span>
              <span className="text">Contact</span>
            </NavLink>
          </li>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
