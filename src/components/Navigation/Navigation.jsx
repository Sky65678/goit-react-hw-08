import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div className={css.cont}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.linkActive)}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.linkActive)
          }
          to="/contacts"
        >
          ContactsPage
        </NavLink>
      )}
    </div>
  );
}
