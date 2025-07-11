import { Link,  useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
export const SpeciesCard = (({url="https://swnz.co.nz/wp-content/uploads/2016/05/costumes04-1024x614.jpg"}) =>{
 const {store, dispatch} =useGlobalReducer()
 return(
<div class="card" style={{width: "200px", height:"350px"}}>
  <img src={url} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{store.species.uid.name}</h5>
    <Link to="/species/{store.species.uid}/">
     <a href="#" class="btn btn-primary">learn more</a>
    </Link>
    <a href="#" class="btn btn"><i class="fa-solid fa-star"></i></a>
  </div>
</div>
)})