import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const PeoplePage = () => {
  const { uid } = useParams();
  const location = useLocation();

  const [person, setPerson] = useState(null);
  const [homeworld, setHomeworld] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ Set image URL (use passed `url` or fallback to SW Visual Guide)
  const imageUrl =
    location.state?.url ||
    `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;

  console.log("Image URL:", imageUrl); // ✅ Correct placement

  // ✅ Load person and homeworld
  const loadPerson = async () => {
    try {
      const resp = await fetch(`https://www.swapi.tech/api/people/${uid}`);
      const data = await resp.json();
      setPerson(data.result.properties);

      const hwResp = await fetch(data.result.properties.homeworld);
      const hwData = await hwResp.json();
      setHomeworld(hwData.result.properties.name);

      setLoading(false);
    } catch (err) {
      console.error("Error loading person:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPerson();
  }, [uid]);

  if (loading || !person) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={imageUrl}
          alt={person.name}
          className="img-fluid"
          style={{ maxWidth: "300px", display: "block", }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
             "https://via.placeholder.com/300x400.png?text=Image+Not+Found";
        }}/>

        <h1>{person.name}</h1>
      </div>

      <div className="row mt-4 text-center">
        <div className="col"><strong>Gender:</strong> {person.gender}</div>
        <div className="col"><strong>Skin Color:</strong> {person.skin_color}</div>
        <div className="col"><strong>Hair Color:</strong> {person.hair_color}</div>
        <div className="col"><strong>Height:</strong> {person.height}</div>
        <div className="col"><strong>Eye Color:</strong> {person.eye_color}</div>
        <div className="col"><strong>Mass:</strong> {person.mass}</div>
        <div className="col"><strong>Homeworld:</strong> {homeworld}</div>
        <div className="col"><strong>Birth Year:</strong> {person.birth_year}</div>
      </div>

      <div className="mt-4 text-center">
        <Link to="/">
          <button className="btn btn-primary">Back Home</button>
        </Link>
      </div>
    </div>
  );
};


