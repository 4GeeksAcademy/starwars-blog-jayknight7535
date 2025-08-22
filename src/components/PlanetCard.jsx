import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export const PlanetCard = ({ planet, url }) => {
  const { addFavorite } = useFavorites();

  if (!planet) return null;

  return (
    <div className="card" style={{ width: "200px", height: "350px" }}>
      <img src={url} className="card-img-top" alt={planet.name} />
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>

        <Link to={`/planet/${planet.uid}`}>
          <button className="btn btn-primary">Learn more</button>
        </Link>

        <button
          type="button"
          className="btn btn"
          onClick={() => addFavorite(planet)}
        >
          <i className="fa-solid fa-star"></i>
        </button>
      </div>
    </div>
  );
};
