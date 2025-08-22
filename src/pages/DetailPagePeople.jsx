import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const PeoplePage = () => {
  const { uid } = useParams();
  const { store, dispatch } = useGlobalReducer();
  
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true);
  const [homeworld, setHomeworld] = useState("");

  // Load person details
  const loadPerson = async () => {
    try {
      const resp = await fetch(`https://www.swapi.tech/api/people/${uid}`);
      const data = await resp.json();
      setPerson(data.result.properties);
    } catch (err) {
      console.error("Failed to load person:", err);
    }
  };

  // Load homeworld from person.homeworld URL
  const loadPlanet = async (homeworldUrl) => {
    try {
      const res = await fetch(homeworldUrl);
      const data = await res.json();
      setHomeworld(data.result.properties.name);
    } catch (err) {
      console.error("Failed to load homeworld:", err);
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      await loadPerson();
    };

    fetchAll();
  }, [uid]);

  // When person.homeworld is available, load planet
  useEffect(() => {
    if (person.homeworld) {
      loadPlanet(person.homeworld);
    }
  }, [person.homeworld]);

  return (
    <div>
      <div className="text-center">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
          className="img-fluid rounded"
          alt={person.name}
        />
        <h1 className="mt-3">{person.name}</h1>
      </div>

      <div className="row mt-4">
        <div className="col"><h5>Gender</h5><p>{person.gender}</p></div>
        <div className="col"><h5>Skin Color</h5><p>{person.skin_color}</p></div>
        <div className="col"><h5>Hair Color</h5><p>{person.hair_color}</p></div>
        <div className="col"><h5>Height</h5><p>{person.height}</p></div>
        <div className="col"><h5>Eye Color</h5><p>{person.eye_color}</p></div>
        <div className="col"><h5>Mass</h5><p>{person.mass}</p></div>
        <div className="col"><h5>Homeworld</h5><p>{homeworld}</p></div>
        <div className="col"><h5>Birth Year</h5><p>{person.birth_year}</p></div>
      </div>

      <div className="mt-4">
        <Link to="/">
          <button className="btn btn-primary">Back Home</button>
        </Link>
      </div>
    </div>
  );
};
