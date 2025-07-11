import { Link } from "react-router-dom"
import storeReducer from "../store"
import { useState } from "react"

export const favorites = () => {
    const [favorites, setFavorites]=useState([])
 const addFavorites =(item)=>{
    setFavorites([...favorites, item])};
  const removeFavorite = (item)=> {
    setFavorites(favorites.filter(fav => fav.name !== item.name))};
    return(
      favorites
    )
}