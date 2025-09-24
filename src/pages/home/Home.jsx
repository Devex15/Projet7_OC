import Banner from "../../components/banner/Banner"
import HomeBanner from "../../assets/image/HomeBanner.png";
import "./Home.scss"
import Flats from "../../assets/flat/flats.json";
import Card from "../../components/card/Card";

function Home() {
    console.log(Flats);
    return (
        <>
            <Banner imgSrc={HomeBanner} alt="Forêt et crique" text="Chez vous, partout et ailleurs" /> 
            <section id={"flat-list"}> 
                {Flats.map((element) => {
                    return (
                    <Card
                    key={element.id}
                    id={element.id} 
                    img={element.cover} 
                    title={element.title}
                    /> 
                    )               
                })}
            </section>
        </>
    )
}

export default Home;
