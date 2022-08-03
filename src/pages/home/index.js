import React from "react";
import {Movie, Movielist} from "./styled"
import { useState, useEffect } from "react";
import APIkey from "../../config/APIKEY"

//import { ResetTvOutlined } from "@mui/icons-material";

function Home() {

const [movies, setMovies] = useState([])
const image_path = 'https://image.tmdb.org/t/p/w500'

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`)
    .then (response => response.json())
    .then (data => { setMovies(data.results)})
},[])

return(
    <Movielist>
        {movies.map(movie => {
            return(
                <Movie key= {movie.id}>
                <a href="#"><img src={`${image_path}${movie.poster_path}` }></img></a>
                <span>{movie.title}</span>
                </Movie>
            )
        })};
    </Movielist>
    )
}
export default Home;