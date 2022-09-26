import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Error from "./pages/Error";
import Home from "./pages/Home";
import MovieInfo from "./pages/Movie/MovieInfo";
import MovieWatch from "./pages/Movie/MovieWatch";
import TVInfo from "./pages/TV/TVInfo";
import TVWatch from "./pages/TV/TVWatch";




 

function App() {
   
    // const currentUser = useAppSelector((state) => state.auth.user);
    const [isSignedIn, setIsSignedIn] = useState(
      Number(localStorage.getItem("isSignedIn")) ? true : false
    );
  


  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname, location.search]);
  
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<MovieInfo />} />
        <Route path="tv/:id" element={<TVInfo />} />
        <Route path="movie/:id/watch" element={<MovieWatch />} />
        <Route path="tv/:id/watch" element={<TVWatch />} />
    
        <Route
          path="history"
          element={<Protected isSignedIn={isSignedIn}>{<History />}</Protected>}
        />
        <Route
        <Route path="*" element={<Error />} />
      </Routes>
    );
  }
  
  export default App;
  