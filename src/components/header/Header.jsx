import logo from "../../assets/svg/LOGO.svg";
import "./Header.module.scss";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo_Kasa" /> 
      <nav>
        <a href="/"> Accueil </a> 
        <a href="/about"> A Propos </a>
      </nav>
    </header>
  );
}

export default Header;
