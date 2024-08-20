import { NavLink } from "react-router-dom";
import classes from "./AppNav.module.css"

const AppNav = () => {
  return (
    <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="cities">Cities</NavLink>
          </li>
          <li>
            <NavLink to="countries">Countries</NavLink>
          </li>
        </ul>
    </nav>
  )
};

export default AppNav;
