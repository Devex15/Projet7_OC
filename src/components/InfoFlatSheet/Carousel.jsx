import { useState } from "react";

function Carrousel ({slides}) {
    //L'index du 1er slide est défini  à 0 .
    const [current, setCurrent] = useState(0); 
    //On définit la longueur du tableau de slides
    const length = slides.length; 


    // Fonction quand on arrive à la preimère image:
    const previousImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1) //Je reviens à la dernière image si mon current et la première image
    }

    //Fonction quand on arrive à la dernière image:
    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1) //Je reviens à la première image si mon current est la première
    }
    
    // On vérifie qu'on a bien à faire à un tableau et qu'il n'est pas vide .
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
      }


      return (
        <section className="slide">

            {/*Si longueur est strictement plus grande alors tu fais , sinon tu ne fais rien */}
          {length > 1 && (
            <>
                <p className="left-Arrow" onClick={previousImage}>
                    <i className="fa-solid fa-chevron-left"></i>
                </p>

                <p className="right-Arrow" onClick={nextImage}>
                    <i className="fa-solid fa-chevron-right"></i>
                </p>
            </>
          )}





          </section>
        )

}

export default Carrousel;