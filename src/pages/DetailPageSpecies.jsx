import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState,useEffect } from "react";

export const SpeciesPage = (() =>{
   const {store, dispatch} =useGlobalReducer()
   const {uid}= useParams();
   const nav = useNavigate();
   const [species, setspecies]=useState({})
   const [homeworld, sethomeworld]=useState({})
   const [peole, setpeople]= useState({})
   
   const loadData = async ()=> {
       const resp= await fetch(`https://www.swapi.tech/api/species/${uid}>`);
       const data= await resp.json();
       setspecies(data.species)

    const loadPlanet = async () => {
        const resps = await fetch(species.homeworld)
        const datas = await resps.json()
        setpeople(datas.result.properties)
    }   
     const loadPeople = async () => {
        const resps = await fetch(species.peole)
        const datas = await resps.json()
        sethomeworld(datas.result.properties)
    }
   }
   useEffect(()=> {
       loadData()
   },[])
  return(
 <div>
   <div>
     <img src="" class="img-fluid rounded-start" alt="..."/>
     <h1>{species.name}</h1>
    </div> 
   <div className="row">
    <div className="col">
        <h5>classification</h5>
    <p>{species.classification}</p>
    </div>
    <div className="col">
        <h5>designation</h5>
        <p>{species.designation}</p>
    </div>
    <div className="col">
        <h5>eye_colors</h5>
        <p>{species.eye_color}</p>
    </div>
    <div className="col">
        <h5>people</h5>
        <p>{people}</p>
    </div>
    <div className="col">
        <h5>skin_colors</h5>
        <p>{species.skin_color}</p>
    </div>
    <div className="col">
        <h5>language</h5>
        <p>{species.language}</p>
    </div>
    <div className="col">
        <h5>hair_colors</h5>
        <p>{species.hair_color}</p>
    </div>
    <div className="col">
        <h5>homeworld</h5>
        <p>{homeworld}</p>
    </div>
    <div className="col">
        <h5>average_lifespan</h5>
        <p>{species.average_lifespan}</p>
    </div>
    <div className="col">
        <h5>average_height</h5>
        <p>{species.average_height}</p>
    </div>
   </div>
    <Link to="/">
        <button className="btn btn-primary">Back home</button>
    </Link>
 </div>
)})