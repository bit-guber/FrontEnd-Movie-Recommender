import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import options from "./helper";

function shuffle(array:string[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const dumpMovieList = Array.from( Array(100).keys() ).map( (value)=>{return value.toString();} );

function RecommendedMovies( props:{updateList:Function } ){
    let [MovieList, setMovieList] = useState(  []  );
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
            priority: "high"

        }
        fetch(options.api_url, body_section )
            .then(Response=>Response.json())
            .then(response => {
                    if (options.ViewedMovieList.length == 0){
                        response = shuffle(response);
                    }
                    setMovieList( response )
                    console.log("response section ", response )
                }
            )
            .catch( error=> console.log("problem recommender", error) ) 
    }, [changestate] );

    if (MovieList.length==0){
        return <div className="ReGrid">
                { dumpMovieList.map( (object)=>  <img src={options.loadingGif} width={"150px"} key={object} />  ) }
            </div>
    }else{
        return <div className="ReGrid">
                { MovieList.map( (object)=>  <MovieCard movie_id={object} viewed={false} updateList={props.updateList} key={object} />  ) }
                </div>
    }
}
export default RecommendedMovies