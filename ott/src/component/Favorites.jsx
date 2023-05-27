import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";

const Favorites = () => {

    let[favoriteMovies , setFav] = useState(null);

    useEffect(()=>{
        setFav(JSON.parse(localStorage.getItem("fav")))
    } , [])

    return ( 
    <div>
       {favoriteMovies &&
        <Movieslist movies={favoriteMovies} title="Favorites"/>}
    </div> );
}
 
export default Favorites;