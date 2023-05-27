import Addmovies from "./component/Addmovies";
import Favorites from "./component/Favorites";
import Home from "./component/Home";
import Moviedetails from "./component/Moviedetails";
import Navbar from "./component/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SearchPage from "./component/SearchPage";

function App()
{
  return(
    <BrowserRouter>
    <div className="App">
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/add" element={<Addmovies/>}/>
       <Route path="/moviedetails/:id" element={<Moviedetails/>}/>
       <Route path="/fav" element={<Favorites/>}/>
       <Route path="/search/:searchword" element={<SearchPage/>}/>
       
       </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
