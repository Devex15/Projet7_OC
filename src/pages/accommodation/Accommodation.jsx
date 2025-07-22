import Carousel from "../../components/InfoFlatSheet/Carousel";
import Flats from "../../assets/flat/flats.json";
import { useParams } from "react-router-dom";

function Flat_Sheet() {
    const {id} = useParams()
    const accommodation= Flats.find(element => element.id === id);
    console.log(accommodation);

    return (
        <div className="accomodation">
            
            {/* <Carousel slides={} /> */}
            {/* Reste des composants à définir */}
        </div>
    )
  
}

export default Flat_Sheet