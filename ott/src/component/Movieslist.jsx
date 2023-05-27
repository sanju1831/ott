import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
const Movieslist = ({movies , title})=>{

    let[favId,setfavId] = useState([])
    let[altered,setAltered]=useState(0);

    useEffect(()=>{
        let fav  = JSON.parse(localStorage.getItem("fav"));
        setfavId(fav.map((m)=>{ return m.id}));

    },[altered])

    let handleAddtoFav = (movie)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav.push(movie);
        localStorage.setItem("fav",JSON.stringify(fav));
        alert("movie added to favorites");
        setAltered(altered+1);
    }

    let remove = (id)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav = fav.filter((m)=>{return m.id!=id});
        localStorage.setItem("fav",JSON.stringify(fav));
        alert("movie removed from favorites");
        setAltered(altered+1);
    }
    return(
        <div>
             <h1 id="title">{title}</h1>

            <div  className="movies">
                {movies.map((movie)=>{
                    return(
                       <div  className="movie">
                        { favId.includes(movie.id) ?
                         <button className="unfill"  onClick={()=>{remove(movie.id)}}><i class='bx bxs-heart' ></i> </button> :
                        <button className="fill"  onClick={()=>{handleAddtoFav(movie)}}><i class='bx bx-heart'></i> </button>}

                       
                          <Link to={`/moviedetails/${movie.id}`}>
                          <img src={movie.poster} alt="poster"  width="200px" height="200px"/>
                            <h2>{movie.moviename}</h2>
                            <p>{movie.genre}</p>
                          </Link>
                        </div>

                    )
                })}
            </div>
        </div>
    );
}
export default Movieslist;
