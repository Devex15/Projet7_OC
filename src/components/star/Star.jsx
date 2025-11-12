import StarIcon from "../../assets/svg/star.svg";
import StarIconEmpty from "../../assets/svg/star-empty.svg";

function Star(rating){
    return(
        <>
            {Array.from({length:rating.rating}).map((_,index) =>( 
                <img
                    key={index}
                    src={StarIcon}
                    alt="star"            
                    />                
                    ))
                    }
    
                    {Array.from({length:(5 - rating.rating)}).map((_,index) =>( 
                    <img
                      key={index}
                      src={StarIconEmpty}
                      alt="star-empty"            
                    />                
                    ))
                    }
                    </>
)
}
export default Star; 