import { useEffect, useState } from "react";
import "./inner.css"
import options from "./helper";



export default function MovieCard( props: { movie_id: string; viewed: any, updateList:Function} ){
    const movie_id =props.movie_id;
    let [poster, setposter] = useState("https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?t=st=1697631043~exp=1697631643~hmac=d09c6a37786242f531c13b7ff8c45b8418aae500cec53396ffe87c514239ec70");
    let [ title, setTitle ] = useState( "" );
    let [describe, setDescribe] = useState( "" );
    let viewed:boolean = props.viewed;

    function update_view(){
        props.updateList( movie_id, viewed );
        viewed = !viewed;
    }

    useEffect(  ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, options.auth_headers)
            .then(Response=>Response.json())
            .then(response => {
                    setposter( `https://image.tmdb.org/t/p/w300${response.poster_path}` );
                    setTitle( response.original_title )
                    setDescribe(  `${response.overview.slice(0, 100)}...` )
                }
            )
            .catch( error=> console.log(movie_id, "problem", error) ) 
    }, []);
    
    return <div className="moviePoster"  >
                <img id={movie_id} src={poster} width="200px"/>  
                <div className="rootitem">
                    <h4 className="contentitem">{title}</h4>
                    <p className="contentitem">{describe}</p>
                    
                    <div className="contentitem checker">
                        <label className="switch">
                            <input type="checkbox" defaultChecked={viewed} onChange={update_view}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
}