import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import options from "./helper";
import "./inner.css";

// const MovieCard = getMovieCard( "../assets/poster_0114709.jpg" )
// const poster = 'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg'

function RecommendedMovies( props:{updateList:Function, reload:Boolean  } ){
    // console.log( "recommended movies run...", options.ViewedMovieList );
    let [MovieList, setMovieList] = useState( [] );
    let [ changestate, setchangestate ] = useState( options.ViewedMovieList.length );
    if (options.ViewedMovieList.length != changestate){
        setchangestate(options.ViewedMovieList.length)}
    // }else{
    //     setchangestate(false)
    // }
    useEffect(  ()=>{
        let body_section = { 
            method: "POST",    
            body:  JSON.stringify({viewed: options.ViewedMovieList}),
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
        }
        // console.log( "request json", body_section );
        fetch(options.api_url, body_section )
            .then(Response=>Response.json())
            .then(response => {
                    setMovieList( response )
                    console.log("response section ", response )
                    // props.updateList(false);
                }
            )
            .catch( error=> console.log("problem recommender", error) ) 
    }, [changestate] );

    // console.log("before recommeded page render", MovieList)
    return <div className="ReGrid">
        { MovieList.map( (object)=>  <MovieCard movie_id={object} viewed={false} updateList={props.updateList} key={object} />  ) }
            </div>
}
export default RecommendedMovies