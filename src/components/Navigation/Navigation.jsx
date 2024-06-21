import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { RiHome2Line, RiContactsBook3Line } from "react-icons/ri";

import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink
        className={css.link}
        to="/">
        <RiHome2Line className={css.icon} />
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={css.link}
          to="/contacts">
          <RiContactsBook3Line className={css.icon} />
        </NavLink>
      )}
    </nav>
  );
}
