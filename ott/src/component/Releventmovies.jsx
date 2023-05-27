import { useState,useEffect } from "react";
import Movieslist from "./Movieslist";

const Releventmovies = ({genre}) => {
    let[movies, setmovies] = useState(null);

    useEffect(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{console.log(data);
                          setmovies(data)
            })
    },[])

    return ( 
        <div className="relevent-movies">
            {movies && 
            <Movieslist
             movies={movies.filter((m)=>{return m.genre.includes(genre)})}
              title="Releventmovies"/>}

        </div>
       
    );
    }
 
export default Releventmovies;