// import poster from "../assets/poster_0113845.jpg"
import { useEffect, useState } from "react";
import "./inner.css"
import options from "./helper";


export default function MovieCard( props ){
    const movie_id = props.movie_id;
    let [poster, setposter] = useState("https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?t=st=1697631043~exp=1697631643~hmac=d09c6a37786242f531c13b7ff8c45b8418aae500cec53396ffe87c514239ec70");
    useEffect(  ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, options.auth_headers)
            .then(Response=>Response.json())
            .then(response => {
                    setposter( `https://image.tmdb.org/t/p/w200/${response.poster_path}` )
                    // console.log( poster, path )
                }
            )
            .catch( error=> console.log(movie_id, "problem", error) ) 
    }  )
    return <div className="card moviePoster" >
        <img src={poster} className="card-img-top" />
    </div>
}