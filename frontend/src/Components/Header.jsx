import { Link, NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";

import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <header className="max_padd_container w-full z-50">
      <div className="flexBetween py-3">
        <Link to={"/"} className="flex items-center gap-x-2">
          <img src={logo} alt="LogoImage" height={31} width={31} />
        </Link>
        <span className="bold-24 hidden xs:flex">Sadam</span>
        <div className="flexCenter gap-x-4">
          {/* Desktop Navbar */}
          <div>
            <Navbar
              containerStyles={
                "hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 rounded-full px-2 py-1"
              }
            />
          </div>
          {/* Mobile Navbar */}
          <div>
            <Navbar
              containerStyles={`${
                menuOpened
                  ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50"
                  : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50 -right-[100%]"
              }`}
            />
          </div>
          <div className="flexBetween gap-x-3 sm:gap-x-2 bold-16">
            {!menuOpened ? (
              <MdMenu
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
                onClick={toggleMenu}
              />
            ) : (
              <MdClose
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
                onClick={toggleMenu}
              />
            )}
            <div className="flexBetween sm:gap-x-6">
              <NavLink to={"/"} className={"flex "}>
                <RiShoppingCart2Line className="p-2 h-10 w-10 hover:text-secondary" />
                <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-primary medium-14 -top-2 right-3">
                  {0}
                </span>
              </NavLink>

              <NavLink
                to={"/"}
                className={
                  "btn_secondary_rounded flexCenter gap-x-2 medium-16 rounded-xl"
                }
              >
                <img src={user} alt="userImage" height={19} width={19} />
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
