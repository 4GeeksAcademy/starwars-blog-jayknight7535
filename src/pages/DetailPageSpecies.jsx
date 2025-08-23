import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const SpeciesPage = () => {
  const { uid } = useParams();
  const location = useLocation();

  const [species, setSpecies] = useState(null);
  const [homeworld, setHomeworld] = useState("");
  const [peopleCount, setPeopleCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const imageUrl =
    location.state?.url ||
    `https://starwars-visualguide.com/assets/img/species/${uid}.jpg`;

  const loadSpecies = async () => {
    try {
      const resp = await fetch(`https://www.swapi.tech/api/species/${uid}`);
      const data = await resp.json();
      const props = data.result.properties;

      setSpecies(props);
      setPeopleCount(props.people?.length || 0);

      // Load homeworld if available
      if (props.homeworld) {
        const hwResp = await fetch(props.homeworld);
        const hwData = await hwResp.json();
        setHomeworld(hwData.result.properties.name);
      }

      setLoading(false);
    } catch (err) {
      console.error("Error loading species:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSpecies();
  }, [uid]);

  if (loading || !species) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex flex-column align-items-center">
        <img
          src={imageUrl}
          alt={species.name}
          className="img-fluid"
          style={{ maxWidth: "300px" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/300x400.png?text=Image+Not+Found";
          }}
        />
        <h1 className="mt-3">{species.name}</h1>
      </div>

      <div className="row mt-4 text-center">
        <div className="col">
          <h5>Classification</h5>
          <p>{species.classification}</p>
        </div>
        <div className="col">
          <h5>Designation</h5>
          <p>{species.designation}</p>
        </div>
        <div className="col">
          <h5>Eye Colors</h5>
          <p>{species.eye_colors}</p>
        </div>
        <div className="col">
          <h5>People</h5>
          <p>{peopleCount}</p>
        </div>
        <div className="col">
          <h5>Skin Colors</h5>
          <p>{species.skin_colors}</p>
        </div>
        <div className="col">
          <h5>Language</h5>
          <p>{species.language}</p>
        </div>
        <div className="col">
          <h5>Hair Colors</h5>
          <p>{species.hair_colors}</p>
        </div>
        <div className="col">
          <h5>Homeworld</h5>
          <p>{homeworld || "N/A"}</p>
        </div>
        <div className="col">
          <h5>Average Lifespan</h5>
          <p>{species.average_lifespan}</p>
        </div>
        <div className="col">
          <h5>Average Height</h5>
          <p>{species.average_height}</p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <Link to="/">
          <button className="btn btn-primary">Back Home</button>
        </Link>
      </div>
    </div>
  );
};
