import "./inner.css"
import MovieCard from "./MovieCard";
import options from "./helper";

function ViewedMovies( props:{ updateList:Function} ){
    return <div className="ViGrid">
        { options.ViewedMovieList.map( (object)=> <MovieCard movie_id={object} viewed={true} updateList={props.updateList} key={object} /> ) }
    </div>
}

export default ViewedMovies
