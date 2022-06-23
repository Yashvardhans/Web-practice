import React , { useEffect, useState } from "react";
import axios from "./axios" ;

function Row(props) {
    const [movies , setMovies] = useState([])

    useEffect (() => {
        async function fetchData(){
            const request = await axios.get(props.url)
        }

    } , []);


    return (
        <div>
            <h2>{props.title}</h2>
            <div>{props.url}</div>
        </div>
    );
}

export default Row;