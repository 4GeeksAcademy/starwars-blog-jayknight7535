import { Link,useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
export const PeopleCard =({ uid="1", name= "Luke Skywalker", url= "https://th.bing.com/th/id/OIP.BwkJcokhVn6mctcr1znVlQAAAA?rs=1&pid=ImgDetMain"}) => {
  const {store, dispatch} =useGlobalReducer()
  return (
    <div class="card" style={{width: "200px", height:"350px"}}>
      <img src={url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <Link to="/people/">
          <a href="#" class="btn btn-primary">
            learn more
          </a>
        </Link>
        <a href="#" class="btn btn">
          <i class="fa-solid fa-star"></i>
        </a>
      </div>
    </div>
  );
};
