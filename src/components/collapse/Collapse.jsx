import React, { useState } from "react";
import chevron from "../../assets/svg/chevron-down-solid-full.svg";
import "./Collapse.scss";

const Collapse = ({ title, content }) => {
  //On utilise le Hook state afin de définir le collapse ( la petite flèche ouvert - fermé )
  const [isOpen, setIsOpen] = useState(false); // Le state est défini false par défaut ( le bouton est fermé)
  //Fonction  qui va gérer l'ouverture fermeture du collapse ( au clic si ouvert -> fermé et inversement)
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
   //  Le title est constamment affiché mais la flèche up et down s'affiche au onclick
    <div className="collapse__dropdownDiv">
      <div className="collapse__dropdownTitle">
        <h2 onClick={display}>
          <span>{title}</span>
          <img src={chevron} alt="chevron" width={20} className={isOpen?"open" : ""}/>  {/* width d'essai à redéfinir */}
        </h2>
      </div>
      {isOpen &&
      (<div className="collapse__dropdownContent"> { /* Si setIsOpen est true alors le contenu s'affiche */}
        {content}
      </div>)
      }
    </div>
  );
};

export default Collapse;