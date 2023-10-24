// import { useEffect, useState } from "react";
import "./inner.css"
import MovieCard from "./MovieCard";
import options from "./helper";
// import { Component, ReactNode } from "react";

// const poster = 'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg'


function ViewedMovies( props:{ updateList:Function} ){
    // console.log( "viewed movies run..." );
    // let viewedMoiveList = props.viewedMovieList
    // let [viewedMoiveList , setMovieList] = useState(options.ViewedMovieList);
    // useEffect( ()=>{
    //     setMovieList( options.ViewedMovieList );
    // }, [  ] );

    // useEffect( ()=> console.log( import.meta.env.VITE_ViewedMovieList, "in viewed movies " ) );
    return <div className="ViGrid">
        { options.ViewedMovieList.map( (object)=> <MovieCard movie_id={object} viewed={true} updateList={props.updateList} key={object} /> ) }
    </div>
}


export default ViewedMovies
