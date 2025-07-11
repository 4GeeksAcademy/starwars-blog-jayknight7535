import { Link,useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { favorites} from "./favorites.jsx";

export const PeopleCard =({url= "https://th.bing.com/th/id/OIP.BwkJcokhVn6mctcr1znVlQAAAA?rs=1&pid=ImgDetMain"}) => {
  const {store, dispatch} =useGlobalReducer()
  return (
    <div class="card" style={{width: "200px", height:"350px"}}>
      <img src={url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{store.people.uid.name}</h5>
        <Link to="/people/{store.people.uid}/">
          <a href="#" class="btn btn-primary">
            learn more
          </a>
        </Link>
         <button type="button" class="btn btn" onClick={addFavorite}>
          <i class="fa-solid fa-star"></i>
        </button>
      </div>
    </div>
  );
};
