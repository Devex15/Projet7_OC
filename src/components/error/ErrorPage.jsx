import { Link } from "react-router-dom";


function PageNotFound() {
  return (
    <>
      <div className="errorDiv">
        <p className="errorDiv__Number">404</p>
        <p className="errorDiv__Text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="errorDiv__Link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;