import { Navigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Releventmovies from "./Releventmovies";
import { useNavigate } from "react-router-dom";

const Moviedetails = () => {
    let { id }= useParams()

    let Navigate = useNavigate();


    let[movie, setmovie] = useState(null);
    let[error, setError] = useState(null);
    let[pending, setPending] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies/"+id)
            .then((res)=>{return res.json()})
            .then((data)=>{console.log(data);
                          setmovie(data)
                          setPending(false)
                          
            })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);})
        },3000)
    },[id])

    let deleteMovie = ()=>{
        fetch("http://localhost:4000/movies/"+id,{ method : "DELETE"})
        .then(()=>{ Navigate("/") })

    }
    return ( 
        <div className="movie-details-outer">
            <h1> Movie details</h1>
            {pending==true && <h1>Loding.....</h1>}
            {error && <h1>{error}</h1>}

            {movie && <div className="movie-details">
                <img src={movie.poster} alt="poster" width="250px" height="250px"/>
                <h1>{movie.moviename}</h1>
                <div className="movie-details-inner"><h2>Actor:{movie.hero}</h2>
                <h2>Director:{movie.director}</h2>
                <h2>Languages:{movie.languages.join(" , ")}</h2>
                <p> <h2>Story line:</h2> {movie.synopsis}</p>
                <h2>Trailer :</h2>
                <iframe width="560" height="315" src={movie.trailer} 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </div>}

            <button onClick={deleteMovie}> Delete </button>

            
            <div>
            {movie && <Releventmovies genre={movie.genre}/>} 
            </div>

            
        </div>
     );
}
 
export default Moviedetails;