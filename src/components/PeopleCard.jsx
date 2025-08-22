import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export const PeopleCard = ({ person, url }) => {
  const { addFavorite } = useFavorites();

  if (!person) return null; // Safe fallback

  return (
    <div className="card" style={{ width: "200px", height: "350px" }}>
      <img src={url} className="card-img-top" alt={person.name} />
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>

        <Link to={`/people/${person.uid}`}>
          <button className="btn btn-primary">Learn more</button>
        </Link>

        <button
          type="button"
          className="btn btn"
          onClick={() => addFavorite(person)}
        >
          <i className="fa-solid fa-star"></i>
        </button>
      </div>
    </div>
  );
};
