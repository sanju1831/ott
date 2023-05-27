import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    let[searchword, setSearchword] = useState("");
    let[ menu, setmenu] = useState(false);

    return ( 
        <nav>
            <div id="logo">
                <Link to="/"><h1>Movies 📹 </h1></Link>
            </div>
            <div id="search-bar">
                <input type="search" placeholder="Search for movies" value={searchword}
                onChange={(e)=>{ setSearchword(e.target.value);}}
                />
                <Link to={`/search/${searchword}`}><button>search</button></Link>
            </div>
            <div id="fav-movie">
                <Link to="/fav">Favorite movie</Link>
            </div>
            <div id="add-movie">
                <Link to="/add">Add movie</Link>
            </div>
            
            <div id="hamberger">
                <span onClick={()=>{setmenu(!menu)}}>
                                    { menu == false ? <i class='bx bx-menu' ></i> :
                                                     <i class='bx bx-menu-alt-right' ></i>}
                 </span>

                { menu && <div id="menu">
                        <div id="fav-movie">
                            <Link to="/fav">Favorite movie</Link>
                        </div>
                        <div id="add-movie">
                            <Link to="/add">Add movie</Link>
                         </div>
                </div>}


            </div>
        </nav>
     );
}
 
export default Navbar;