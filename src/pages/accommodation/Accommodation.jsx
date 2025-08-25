import Carousel from "../../components/InfoFlatSheet/Carousel";
import Flats from "../../assets/flat/flats.json";
import { useParams } from "react-router-dom";
import Tag from "../../components/InfoFlatSheet/Tag";
import Owner from "../../components/InfoFlatSheet/owner";
import Collapse from "../../components/collapse/collapse";

function Flat_Sheet() {
    const {id} = useParams()
    const accommodation= Flats.find(element => element.id === id);
    console.log(accommodation);
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
            <section>
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
            {/* Reste des composants à définir */}
            </section>

            <section>
                    <div>
                        <Collapse title={"Description"} content={<p>{accommodation.description}</p>}/>
                    </div>

                    <div>
                    <Collapse title={"Equipements"} content={equipements}/>
                    </div>

            </section>
        
        </div>
    )
  
}

export default Flat_Sheet