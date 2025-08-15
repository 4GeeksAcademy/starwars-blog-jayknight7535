import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";

export const PlanetPage = (() =>{
  const {store, dispatch} =useGlobalReducer()
  const [planet, setPlanet] = useState({})
  const {uid}=useParams()
  const [people, setpeople] = useState({})
  const [species, setspecies] = useState({})
  
  const loadData = async ()=> {
      const resp= await fetch(`https://www.swapi.tech/api/planets/${uid}`);
      const data= await resp.json();
      setPlanet(data.result.properties)  
  }
  useEffect(()=> {
      loadData()
  },[]); 
  
    return(
 <div>
     <div>
     <img src="" class="img-fluid rounded-start" alt="..."/>
     <h5>{planet.name}</h5>
    </div> 
    <div className="row">
     <div className="col">
      <h5>climate</h5>
      <p>{planet.climate}</p>
     </div>
     <div className="col">
      <h5>surface_water</h5>
      <p>{planet.surface_water}</p>
     </div>
     <div className="col">
      <h5>diameter</h5>
      <p>{planet.diameter}</p>
     </div>
     <div className="col">
       <h5>rotation_period</h5>
       <p>{planet.rotation_period}</p>
     </div>
     <div className="col">
      <h5>terrain</h5>
      <p>{planet.terrain}</p>
     </div>
     <div className="col">
      <h5>gravity</h5>
      <p>{planet.gravity}</p>
     </div>
     <div className="col">
      <h5>orbital_period</h5>
      <p>{planet.orbital_period}</p>
     </div>
     <div className="col">
      <h5>population</h5>
      <p>{planet.population}</p>
     </div>
    </div>
     <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
 </div>
)})