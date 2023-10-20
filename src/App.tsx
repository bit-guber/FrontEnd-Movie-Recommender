// import options from "./helper"
import { useEffect, useState } from "react";
import Describe from "./components/Describe";
import RecommendedMovies from "./components/RecommendedMovies";
import ViewedMovies from "./components/ViewedMovies";
import options from "./components/helper";

// const temp  = "dark"
// const [Theme, setTheme] = useState( 0 );
// let viewedMovieList = options.viewedMovieList;
function App() {
  const [viewedMovieList, setList] = useState( false );

  useEffect(  ()=>{
    console.log( "Recall - app render" );
  }  );

  return (
    <>
      <Describe data-bs-theme = "dark"/>
      <ViewedMovies viewedmovieState={viewedMovieList} updateList={setList} data-bs-theme = "dark"/>
      <RecommendedMovies viewedmovieState={viewedMovieList} updateList={setList} data-bs-theme = "dark"/>
    </>
  )
}

export default App
