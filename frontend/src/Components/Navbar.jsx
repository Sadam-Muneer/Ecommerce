import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/clothing"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        Clothing
      </NavLink>
      <NavLink
        to={"/cosmetics"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        cosmetics
      </NavLink>
      <NavLink
        to={"/electronics"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        Electronics
      </NavLink>

      <NavLink
        to={"/product"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        Product
      </NavLink>
    </nav>
  );
};

export default Navbar;
