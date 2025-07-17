import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Flat_Sheet() {
    return (
        <div className="accomodation">
            <Header />
                <main>
                    <InfoFlatSheet /> {/* composant qui affiche les infos du flat 
                    et qui reste à définir */}
                </main>

            <Footer />
        </div>
    )
  
}

export default Flat_Sheet