import { useEffect, useState } from "react";
import options from "./helper";




export default function MovieCard( props: { movie_id: string; viewed: boolean, updateList:Function} ){
    const movie_id =props.movie_id;
    let [poster, setposter] = useState("https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?t=st=1697631043~exp=1697631643~hmac=d09c6a37786242f531c13b7ff8c45b8418aae500cec53396ffe87c514239ec70");
    let [ title, setTitle ] = useState( "" );
    let [describe, setDescribe] = useState( "" );
    let [ genres, setgenres ] = useState( "" );
    let viewed:boolean = props.viewed;
    const imageWidth = viewed ? "150px" : "200px";
    const infoUrl:string = `https://www.themoviedb.org/movie/${movie_id}`;
    let [btnstate, setbtnstate] = useState( false );

    function update_view(){
        setbtnstate(true);
        props.updateList( movie_id, viewed );
        viewed = !viewed;
    }

    useEffect(  ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, options.auth_headers)
            .then(Response=>Response.json())
            .then(response => {
                    setposter( `https://image.tmdb.org/t/p/w300${response.poster_path}` );
                    setTitle( response.original_title );
                    setDescribe( response.overview );
                    // setDescribe(  `${response.overview.slice(0, describeLimit)}...` );
                    let temp = response.genres[0].name;
                    for (let step = 1; step < response.genres.length; step++){
                        temp+=` | ${response.genres[step].name}`;
                    }
                    setgenres( temp );
                }
            )
            .catch( error=> console.log(movie_id, "problem", error) ) 
    }, []);
    let empty = "";
    
    // if (browser.mozilla){
    //     empty = " mobilecom";
    // }

    // console.log(screen.orientation, "screen orientation");

    return <div className={`moviePoster${empty}`} onClick={()=>{}}   >
                <img id={movie_id} src={poster} width={imageWidth}/>  
                <div className={`rootitem${empty}`}>
                    <a className="MovieDBLink"  href={infoUrl} target="_blank" rel="noopener noreferrer">
                        <h4 className="contentitem" >{title}</h4>
                        <p className="contentitem">{describe}</p>
                        <h6 className="contentitem">{genres}</h6>
                    </a>
                    <div className="contentitem checker">
                            <label className="switch">
                                <input disabled={btnstate} type="checkbox" defaultChecked={viewed} onChange={update_view}/>
                                <span className="slider round"></span>
                            </label>
                
                    </div>
                </div>
            </div>
}