import MovieCard from "./MovieCard";
import options from "./helper";

function ViewedMovies( props:{ updateList:Function} ){
    const ViewedMovieList = options.ViewedMovieList;
    if (ViewedMovieList.length == 0){
        return <div className="ViGrid">
                    <img className="moviePoster" width={"200px"} src="https://recommender-api-vercel.vercel.app/get_image"></img>
                </div>
    }else{
        return <div className="ViGrid">
                    { ViewedMovieList.map( (object)=> <MovieCard movie_id={object} viewed={true} updateList={props.updateList} key={object} /> ) }
               </div>
    }
}

export default ViewedMovies
