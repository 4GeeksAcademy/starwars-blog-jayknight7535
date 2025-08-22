import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export const SpeciesCard = ({ species, url }) => {
  const { addFavorite } = useFavorites();

  if (!species) return null;

  return (
    <div className="card" style={{ width: "200px", height: "350px" }}>
      <img src={url} className="card-img-top" alt={species.name} />
      <div className="card-body">
        <h5 className="card-title">{species.name}</h5>

        <Link to={`/species/${species.uid}`}>
          <button className="btn btn-primary">Learn more</button>
        </Link>

        <button
          type="button"
          className="btn btn"
          onClick={() => addFavorite(species)}
        >
          <i className="fa-solid fa-star"></i>
        </button>
      </div>
    </div>
  );
};
