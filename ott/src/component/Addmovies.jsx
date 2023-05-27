import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Addmovies = () => {

    let Navigate = useNavigate();

    let moviename = useRef();
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let genre = useRef();
    let yor = useRef();
    let rating = useRef();
    let poster = useRef();
    let trailer = useRef();
    let synopsis = useRef();
    let handleAddMovie = (e)=>{
       
        e.preventDefault()

        // create new movie object 
        let newMovie = {
            moviename : moviename.current.value,
            hero : hero.current.value,
            heroine : heroine.current.value,
            director: director.current.value,
            languages : [],
            genre:  genre.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: yor.current.value,
            rating: rating.current.value,
            synopsis : synopsis.current.value
        };

        let options = document.getElementsByName("lang");
        for (let i = 0; i < options.length; i++) 
        {
            if(options[i].checked==true)
            {
                newMovie.languages.push(options[i].value)
            }
        }

        // let option1 = document.getElementsByName("genre");
        // for (let i = 0; i < option1.length; i++) 
        // {
        //     if(option1[i].checked==true)
        //     {
        //         newMovie.genre.push(option1[i].value)
        //     } 
        // }

         //send the movie object to the database

        fetch("http://localhost:4000/movies",
        {
            method : "POST" ,
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(newMovie)
        }
        )
        .then(()=>{
            alert("data added to json database");
            Navigate("/");
           
        })

    }
    return ( 
        <div className="addmovies">
            <h1>Add Movies</h1>
            <form onSubmit={handleAddMovie}>
                <div className="inputouter">
                <input type="text" placeholder="movie name" ref={moviename} required/>  <br />
                <input type="text" placeholder="Hero name" ref={hero} required/>  <br />
                <input type="text" placeholder="heroine name" ref={heroine} required />  <br />
                <input type="text" placeholder="director name" ref={director} required />  <br />
                </div>
                <fieldset>
                <legend><label >select languages</label></legend>
                <input type="checkbox" name="lang" id="kan" value="Kannada"/> <label for="kan">Kannada</label>  
                <input type="checkbox" name="lang" id="tam" value="Tamil"/> <label for="tam">Tamil</label>
                <input type="checkbox" name="lang" id="tel" value="Telugu"/> <label for="tel">Telugu</label>
                <input type="checkbox" name="lang" id="mal" value="Malayalam"/> <label for="mal">Malayalam</label>
                <input type="checkbox" name="lang" id="hin" value="Hindi"/> <label for="hin">Hindi</label>  
                </fieldset>
                {/* <fieldset>
                <legend><label >select genre</label></legend>
                <input type="checkbox" name="genre" id="act" value="Action" /> <label for="act" >Action</label>  
                <input type="checkbox" name="genre" id="rom" value="Romance" /> <label for="rom" >Romance</label>
                <input type="checkbox" name="genre" id="dra" value="Drama"/> <label for="dra" >Drama</label>
                <input type="checkbox" name="genre" id="com" value="Comedy"/> <label for="com" >Comedy</label>
                <input type="checkbox" name="genre" id="div" value="Divine"/> <label for="div" >Divine</label>  
                </fieldset> */}

                <div className="inputinner">
                <input type="text" placeholder="genre" ref={genre} required /><br/>
                <input type="url" placeholder="poster" ref={poster} required /><br/>
                <input type="url" placeholder="trailer" ref={trailer} required /><br/>
                <input type="number" min="1950"  max="2023" placeholder="release" ref={yor}  required/> <br/>
                <input type="number" min="1" step="0.5" max="10" placeholder="rating" ref={rating} required /><br/>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="synopsis" ref={synopsis} required></textarea><br/>
                <input type="submit" value="Add Movie"  className="submit"/>
            </form>
        </div>
     );
}
 
export default Addmovies;



