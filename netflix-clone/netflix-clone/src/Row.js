import React , { useEffect, useState } from "react";
import axios from "./axios" ;
import './Row.css'

function Row(props) {
    
    const base_url = "http://image.tmdb.org/t/p/w500//"

    const [movies , setMovies] = useState([])

    useEffect (() => {
        async function fetchData(){
            const request = await axios.get(props.url);
            setMovies(request.data.results);
            
            return request;
        }
        fetchData();

    } , [props.url]);
    
    



    return (
        <div className="row">
             
            <h2 className="title">{props.title}</h2>
            <div className="row-posters">
                 {movies.map( movie => (
                    <img 
                    key={movie.id}
                    className={`row-poster ${props.isLargeRow && "row-posterLarge"}`}
                    src={`${(base_url+ (props.isLargeRow ? movie.poster_path : movie.backdrop_path))}`} alt = {movie.name}/>

                 )

                 )}
                 
                 
             </div>
            {/* <div>{props.url}</div> */}
          

        </div>
    );
}


export default Row;