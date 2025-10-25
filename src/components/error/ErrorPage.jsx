import { Link } from "react-router-dom";
import Styles from"./ErrorPage.module.scss";
import "../../styles/utils/_fonts.scss"

function PageNotFound() {
  return (
    <>
      <div className= {Styles.errorDiv}>
        <p className={Styles.errorDiv__Number}>404</p>
        <p className={Styles.errorDiv__Text}>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className={Styles.errorDiv__Link}>
          Retourner sur la page d'accueil
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;