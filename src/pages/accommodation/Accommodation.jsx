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

    return (
        <div className="accomodation">
            
            {/* <Carousel slides={} /> */}
            <section>
                <div>
                    <h1>{accommodation.title}</h1>
                    <h2>{accommodation.location}</h2>
                 {accommodation.tags.map(function(element) {
                     return <Tag name={element} />
                    })}
                </div>

                <div>
                 <Owner />
                 </div>
            {/* Reste des composants à définir */}
            </section>

            <section>
                    <div>
                        <Collapse title={"Description"} content={accommodation.description}/>
                    </div>

                    <div>
                    <Collapse title={"Equipements"} content={accommodation.equipments}/>
                    </div>

            </section>
        
        </div>
    )
  
}

export default Flat_Sheet