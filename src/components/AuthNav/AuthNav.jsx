import { NavLink } from "react-router-dom";

import clsx from "clsx";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.cont}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.linkActive)}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.linkActive)}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
