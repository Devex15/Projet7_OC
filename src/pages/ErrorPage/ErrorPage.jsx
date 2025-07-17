import ErrorPage from "../../components/error/ErrorPage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const NoPageFound = () => {
    return (
      <>
        <div className="NoPage">
          <Header />
            <ErrorPage />
          <Footer />
        </div>
      </>
    );
  };
  
  export default NoPageFound;

