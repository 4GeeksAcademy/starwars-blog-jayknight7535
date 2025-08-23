import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const PlanetPage = () => {
  const { uid } = useParams();
  const location = useLocation();

  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fallback image for planets
  const imageUrl =
    location.state?.url ||
    `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;

  console.log("Planet Image URL:", imageUrl);

  const loadPlanet = async () => {
    try {
      const resp = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
      const data = await resp.json();
      setPlanet(data.result.properties);
      setLoading(false);
    } catch (err) {
      console.error("Error loading planet:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPlanet();
  }, [uid]);

  if (loading || !planet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex flex-column align-items-center">
        <img
          src={imageUrl}
          alt={planet.name}
          className="img-fluid"
          style={{ maxWidth: "300px" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/300x400.png?text=Image+Not+Found";
          }}
        />
        <h1 className="mt-3">{planet.name}</h1>
      </div>

      <div className="row mt-4 text-center">
        <div className="col"><strong>Climate:</strong> {planet.climate}</div>
        <div className="col"><strong>Surface Water:</strong> {planet.surface_water}</div>
        <div className="col"><strong>Diameter:</strong> {planet.diameter}</div>
        <div className="col"><strong>Rotation Period:</strong> {planet.rotation_period}</div>
        <div className="col"><strong>Terrain:</strong> {planet.terrain}</div>
        <div className="col"><strong>Gravity:</strong> {planet.gravity}</div>
        <div className="col"><strong>Orbital Period:</strong> {planet.orbital_period}</div>
        <div className="col"><strong>Population:</strong> {planet.population}</div>
      </div>

      <div className="mt-4 text-center">
        <Link to="/">
          <button className="btn btn-primary">Back Home</button>
        </Link>
      </div>
    </div>
  );
};
