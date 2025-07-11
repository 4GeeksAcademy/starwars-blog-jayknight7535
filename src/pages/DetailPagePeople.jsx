import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState, useNavigate } from "react";


export const PeoplePage =  (() =>{
   const {store, dispatch} =useGlobalReducer();
   

    const resp= fetch('https://www.swapi.tech/api/people/1/');
    const data =  resp.json();
    const people = Promise.all(data.results.map(people => fetch(people.url)))
           .then(resps => {
               return Promise.all(resps.map(resp => resp.json())) 
           })    
    return (
 <div>
    <div>
     <img src="..." class="img-fluid rounded-start" alt="..."/>
     <h1>{people.name}</h1>
    </div> 
  <div className="row">
    <div className="col">
        <h5>gender</h5>
        <p>{people.gender}</p>
    </div>
    <div className="col">
        <h5>skin color</h5>
        <p>{people.skin_color}</p>
    </div>
    <div className="col">
        <h5>hair color</h5>
        <p>{people.hair_color}</p>
    </div>
    <div className="col">
        <h5>height</h5>
        <p>{people.height}</p>
    </div>
    <div className="col">
        <h5>eye color</h5>
        <p>{people.eye_color}</p>
    </div>
    <div className="col">
        <h5>mass</h5>
        <p>{people.mass}</p>
    </div>
    <div className="col">
        <h5>homeworld</h5>
        <p>{jsonify(fetch(people.planet))}</p>
    </div>
    <div className="col">
        <h5>birth year</h5>
        <p>{pople.birth_year}</p>
    </div>
   </div>
    <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
 </div>
)})