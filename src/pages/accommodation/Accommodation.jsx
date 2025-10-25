import Carousel from "../../components/InfoFlatSheet/Carousel";
import Flats from "../../assets/flat/flats.json";
import { useParams } from "react-router-dom";
import Tag from "../../components/InfoFlatSheet/Tag";
import Owner from "../../components/InfoFlatSheet/owner";
import Collapse from "../../components/collapse/collapse";
import NoPageFound from "../error/Error";
import StarIcon from "../../assets/svg/star-regular-full.svg";
import styles from "./accomodation.module.scss";


function Flat_Sheet() {
    const {id} = useParams()
    const accommodation= Flats.find(element => element.id === id);
    if (accommodation === undefined ) {
      return <NoPageFound />
    } 
    const equipements = accommodation.equipments.map(
        (Element, index) => {
          return (
            <>
              <p  key={index}>
                {Element}
              </p>
            </>
          );
        }
      );
    return (
        <div className="accomodation">
            
            {/* <Carousel slides={} /> */}
            <Carousel slides={accommodation.pictures} />

            {/*<section>
                <div>
                    <h1>{accommodation.title}</h1>
                    <h2>{accommodation.location}</h2>

                 {accommodation.tags.map(function(element, index) {
                     return <Tag name={element} key={index}/>
                    })}

                </div>

                <div>
                 <Owner host={accommodation.host}/>
                 </div>

                 <div className="rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                    <img key={star} src={StarIcon} alt="star" className="star" />
                    ))}
                  </div>
            Reste des composants à définir */}
            {/*</section>

            <section>
                    <div>
                        <Collapse title={"Description"} content={<p>{accommodation.description}</p>}/>
                    </div>

                    <div>
                    <Collapse title={"Equipements"} content={equipements}/>
                    </div> 
               
            </section> */}

          <section className={styles.infoSection}>
              <div className={styles.infoTop}>
                  {/* Bloc gauche : titre + localisation + tags */}
                <div className={styles.leftInfo}>
                    <h1>{accommodation.title}</h1>
                    <h2>{accommodation.location}</h2>

                 <div className={styles.tags}>
                    {accommodation.tags.map((element, index) => (
                    <Tag name={element} key={index} />
                    ))}
                  </div>
                </div>

                {/* Bloc droite : owner + rating */}
                <div className={styles.rightInfo}>
                  <Owner host={accommodation.host} />

                <div className={styles.rating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                  <img key={star} src={StarIcon} alt="star" className={styles.star} />
                ))}

                {[1, 2, 3, 4, 5].map((star) => (
                  <img key={star} src={StarIcon} alt="star" className={styles.star} />
                ))}
              </div>
            </div>
          </div>

            {/* Section collapses */}
            <div className={styles.collapses}>
              <Collapse
              title="Description"
              content={<p>{accommodation.description}</p>}
            />
            <Collapse title="Equipements" content={equipements} />
          </div>
          </section>
       
        </div>
    )
  
}

export default Flat_Sheet