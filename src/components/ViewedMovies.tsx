import { useEffect, useState } from "react";
import options from "./helper"
import "./inner.css"
import MovieCard from "./MovieCard";
// import { Component, ReactNode } from "react";

// const poster = 'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg'


function ViewedMovies(){
    let [viewedMoiveList , setMovieList] = useState(options.viewedMovieList);
    useEffect( ()=>{
        setMovieList( viewedMoiveList );
    }, [ options.ListAmount ] );

    useEffect( ()=> console.log( options.ListAmount, "in viewed movies " ) );
    return <div className="ViGrid">
        { viewedMoiveList.map( (object, index)=> <MovieCard movie_id={object} viewed={true} key={index} /> ) }
    </div>
}


export default ViewedMovies
