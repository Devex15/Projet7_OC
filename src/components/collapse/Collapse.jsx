import React, { useState } from "react";

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
        <h2>{title}</h2>
        <p onClick={display}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>
      
      <div className="collapse__dropdownContent"> { /* Si setIsOpen est true alors le contenu s'affiche */}
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;