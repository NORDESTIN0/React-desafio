import React from "react";
import { useState, useEffect } from "react";
import Movie from "./../../components/Movie"
import {Input, Stack} from "@mui/material";
import {Link} from "react-router-dom";


const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e8fa4eae0c5122fbf1082350028a12f7&language=pt-PT&page=1';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=e8fa4eae0c5122fbf1082350028a12f7&query=';

function Home() {

const [movies, setMovies] = useState([])
const [searchTerm, setSearchTerm] = useState('')

useEffect (() => {
   fetch (FEATURED_API)
   .then(res => res.json())
   .then(data => {
    console.log(data.results)
    setMovies(data.results);
   }) 
}, [])

const handleOnsubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
    fetch (SEARCH_API+searchTerm)
    .then(res => res.json())
    .then(data => {
     console.log(data.results)
     setMovies(data.results);
    });
    setSearchTerm('');
    }
};

const handleOnchange = (e) => {
    setSearchTerm(e.target.value);
}

return (
    <>
    <header>
        <Stack>
            <h1>FILMES ONLINE</h1>
        </Stack>
        <form onSubmit={handleOnsubmit}> 
            <Input className="Search" placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleOnchange}
            />
        </form>
    </header>
    <div className="movie-container">
       {movies.map((movie) => (
        <Movie 
        key={movie.id}
        {...movie}
        />
       )
       )}
    </div>
    </>
)
}
export default Home;