import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import options from "./helper";
import "./inner.css";

// const MovieCard = getMovieCard( "../assets/poster_0114709.jpg" )
// const poster = 'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg'

function RecommendedMovies(){
    let [MovieList, setMovieList] = useState( [] );
    useEffect(  ()=>{
        let body_section = { 
            method: "POST",
            body:  JSON.stringify({viewed: options.viewedMovieList}),
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Access-Control-Allow-Origin': "*"
            }
            }
        console.log( "request json", body_section );
        fetch(options.api_url, body_section )
            .then(Response=>Response.json())
            .then(response => {
                    setMovieList( response )
                    console.log( response )
                }
            )
            .catch( error=> console.log("problem recommender", error) ) 
    }  
    );


    return <div className="ReGrid">
        { MovieList.map( (object, index)=>  <MovieCard movie_id={object} key={index} />  ) }
            </div>
}
export default RecommendedMovies