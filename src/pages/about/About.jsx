import PageAboutBanner from "../../assets/image/PageAboutBanner.png";
import Collapse from "../../components/collapse/Collapse"
import Banner from "../../components/banner/Banner";
import AboutData from "../../assets/about/about.json";
import "./About.scss";

const PageAbout = () => {
    //console.log(AboutData);
    return(
        <>
            <div className="PageAbout">
            <Banner imgSrc={PageAboutBanner} alt="Forêts et lacs" /> 
              
                <section className="AboutContainer">
                    {AboutData.map((about) => {
                        return (
                            <div key={about.id}> 
                                <Collapse title={about.title} content={about.content}/>
                            </div>
                            )
                        })

                    }

                </section>
            </div>
        </>
    )
}

export default PageAbout;