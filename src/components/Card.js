import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = (props) => {
  return (
    <div className="all-cards">
      <div className="cards">
        <Link to={`/apartment/${props.id}`}>
          <div className="card-image">
            <img className="resize" src={props.cover} alt="appart" />
          </div>
          <div className="title">{props.title}</div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
