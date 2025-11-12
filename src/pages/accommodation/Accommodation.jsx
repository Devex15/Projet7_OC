import Carousel from "../../components/InfoFlatSheet/Carousel";
import Flats from "../../assets/flat/flats.json";
import { useParams } from "react-router-dom";
import Tag from "../../components/InfoFlatSheet/Tag";
import Owner from "../../components/InfoFlatSheet/owner";
import Collapse from "../../components/collapse/Collapse";
import NoPageFound from "../error/Error";
import styles from "./accomodation.module.scss";
import Star from "../../components/star/Star";

function Flat_Sheet() {
  const { id } = useParams();
  const accommodation = Flats.find((element) => element.id === id);

  if (!accommodation) {
    return <NoPageFound />;
  }

  const equipements = accommodation.equipments.map((Element, index) => (
    <p key={index}>{Element}</p>
  ));

  return (
    <div className="accomodation">
      <Carousel slides={accommodation.pictures} />

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
              <Star rating={accommodation.rating}/>
            </div>
          </div>
        </div> 

        {/* Section collapses */}
        <div className={styles.collapses}>
          <Collapse
            title="Description"
            content={<p>{accommodation.description}</p>}
          />
          <Collapse title="Équipements" content={equipements} />
        </div>
      </section>
    </div>
  );
}

export default Flat_Sheet;
