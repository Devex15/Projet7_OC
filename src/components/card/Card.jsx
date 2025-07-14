import { Link } from "react-router-dom";

function Card({id,img,title}) {
return(
    <Link to={`/accommodation/${id}`}>
        <article className="card">
            <img src={img} alt={title} className="card_img" />

            <h2 className="card_title">{title}</h2>
        </article>
    </Link>
)
}

export default Card;