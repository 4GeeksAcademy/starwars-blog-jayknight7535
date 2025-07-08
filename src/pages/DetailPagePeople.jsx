import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";


export const PeoplePage = (() =>{
   const {store, dispatch} =useGlobalReducer() 
   const { book_id } = useParams();
   const nav = useNavigate();

   const [person,setperson]= useState([])

   const loadData = async ()=> {
    const resp= await fetch(https://www.swapi.tech/api/people/<uid>/);
    const data= await resp.json();
    setperson = data.person
}
useEffect = (()=> {
    loadData()
},[])
    return (
 <div>
    <div>
     <img src="" class="img-fluid rounded-start" alt="..."/>
     <h1>person.name</h1>
    </div> 
  <div className="row">
    <div className="col">
        <h5>gender</h5>
        <p>person.gender</p>
    </div>
    <div className="col">
        <h5>skin color</h5>
        <p>person.skin_color</p>
    </div>
    <div className="col">
        <h5>hair color</h5>
        <p>person.hair_color</p>
    </div>
    <div className="col">
        <h5>height</h5>
        <p>person.height</p>
    </div>
    <div className="col">
        <h5>eye color</h5>
        <p>person.eye_color</p>
    </div>
    <div className="col">
        <h5>mass</h5>
        <p>person.mass</p>
    </div>
    <div className="col">
        <h5>homeworld</h5>
        <p>person.planet</p>
    </div>
    <div className="col">
        <h5>birth year</h5>
        <p>person.birth_year</p>
    </div>
   </div>
    <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
 </div>
)})