// import options from "./helper"
import { useState } from "react";
import Describe from "./components/Describe";
import RecommendedMovies from "./components/RecommendedMovies";
import ViewedMovies from "./components/ViewedMovies";
import options from "./components/helper";

function App() {
  let [changestate, setchangestate] = useState(false);
  function setList(movie_id :string, cut:boolean = false){
    if ( cut ){

      const index = options.ViewedMovieList.indexOf(movie_id);
      options.ViewedMovieList.splice(index, 1);

    }
    else{
      if (options.ViewedMovieList.length == 10){
        options.ViewedMovieList.shift();
      }

      options.ViewedMovieList.push( movie_id );
    }
    
    setchangestate(!changestate);
  }

  return (
    <>
      <Describe data-bs-theme = "dark"/>
      <hr></hr>
      <h2 className="viH">Liked Movie list</h2>
      <ViewedMovies updateList={setList} data-bs-theme = "dark"/>
      <hr></hr>
      <h2 className="reH">Recommended Movie list</h2>
      <RecommendedMovies updateList={setList} data-bs-theme = "dark"/>
      <br></br>
    </>
  )
}

export default App
