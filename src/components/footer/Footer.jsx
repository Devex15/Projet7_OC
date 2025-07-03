import logo from "../../assets/LOGO.svg";

function Footer() {
    return(
        <footer>
            <img src={logo} alt="Logo_Kasa" />
            {/* Rajouter le logo copyright ci dessous */}
            <p> 2020 Kasa. All rights reserved</p>   
        </footer>
    )
}

export default Footer