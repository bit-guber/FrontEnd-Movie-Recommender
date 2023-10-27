import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import options from "./helper";
import "./inner.css";

function RecommendedMovies( props:{updateList:Function } ){
    let [MovieList, setMovieList] = useState( [] );
    let [ changestate, setchangestate ] = useState( options.ViewedMovieList.length );
    if (options.ViewedMovieList.length != changestate){
        setchangestate(options.ViewedMovieList.length)}
    useEffect(  ()=>{
        let body_section = { 
            method: "POST",    
            body:  JSON.stringify({viewed: options.ViewedMovieList}),
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
        }
        fetch(options.api_url, body_section )
            .then(Response=>Response.json())
            .then(response => {
                    setMovieList( response )
                    console.log("response section ", response )
                }
            )
            .catch( error=> console.log("problem recommender", error) ) 
    }, [changestate] );

    return <div className="ReGrid">
        { MovieList.map( (object)=>  <MovieCard movie_id={object} viewed={false} updateList={props.updateList} key={object} />  ) }
            </div>
}
export default RecommendedMovies