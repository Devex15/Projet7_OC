import logo from "../../assets/svg/LOGO.svg";
import styles from "./Footer.module.scss"

function Footer() {
    return(
        <footer className={styles.Footer}>
            <img src={logo} alt="Logo_Kasa" />
            {/* Rajouter le logo copyright ci dessous */}
            <p> 2020 Kasa. All rights reserved</p>   
        </footer>
    )
}

export default Footer