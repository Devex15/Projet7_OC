import { NavLink } from "react-router-dom";
import logo from "../../assets/svg/LOGO.svg";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo_Kasa" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? styles.active : ""}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? styles.active : ""}
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;