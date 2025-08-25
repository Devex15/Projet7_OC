import logo from "../../assets/svg/LOGO.svg";


function Header() {
  return (
    <header>
      <img src={logo} alt="Logo_Kasa" /> 
      <div>
        <a href="/"> </a>
        <a href="/about"> </a>
      </div>
    </header>
  );
}

export default Header;
