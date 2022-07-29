import React from "react";
//import StarIcon from '@mui/icons-material/Star';
//import StarHalfIcon from '@mui/icons-material/StarHalf';
//import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Movie, Movielist} from "./styled"
import { useState, useEffect } from "react";
import { ResetTvOutlined } from "@mui/icons-material";

function Home() {

const [movies, setMovies] = useState([])

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e8fa4eae0c5122fbf1082350028a12f7&language=en-US&page=1`)
    .then (response => response.json())
    .then (data => setMovies(data.results))
},[])



return(
    <Movielist>
        {movies.map(movie => {
            return(
                <Movie key= {movie.id}>
                    <a href="#"><img src={movie.image_url}></img></a>
                    <span>{movie.title}</span>
                </Movie>
            )
        })};
    </Movielist>
    )
}
export default Home;