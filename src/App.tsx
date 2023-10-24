// import options from "./helper"
import { useEffect, useState } from "react";
import Describe from "./components/Describe";
import RecommendedMovies from "./components/RecommendedMovies";
import ViewedMovies from "./components/ViewedMovies";
import options from "./components/helper";
// import options from "./components/helper";

// const temp  = "dark"
// const [Theme, setTheme] = useState( 0 );
// let viewedMovieList = options.viewedMovieList;


function App() {
  // const viewedMovieList = options.ViewedMovieList ;
  let [changestate, setchangestate] = useState(false);
  function setList(movie_id :string){
    options.ViewedMovieList.push( movie_id );
    setchangestate(true);
    // console.log( "vdnfd", viewedMovieList )
  }
  
  useEffect(  ()=>{
    // console.log( "Recall - app render" );
    setchangestate(false);
  } ,[changestate] );

  return (
    <>
      <Describe data-bs-theme = "dark"/>
      <ViewedMovies updateList={setList} data-bs-theme = "dark"/>
      <RecommendedMovies updateList={setList} reload={changestate} data-bs-theme = "dark"/>
    </>
  )
}

export default App
