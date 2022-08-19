import React from "react";
import { useState} from "react";
import {Input, Stack} from "@mui/material";
import Movie from "../../components/Movie";


const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=e8fa4eae0c5122fbf1082350028a12f7&query=';

function Header() {

const [movies, setMovies] = useState([])

const [searchTerm, setSearchTerm] = useState('')



const handleOnsubmit = (e) => {
    e.preventDefault();
    
    let timer;
    if(searchTerm)timer = setTimeout(() =>{
    fetch (SEARCH_API+searchTerm)
    .then(res => res.json())
    .then(data => {
     console.log(data.results)
     setMovies(data.results);
    });
    },500);
};

const handleOnchange = (e) => {
    setSearchTerm(e.target.value); 
    console.log("sem debonce:" +e.target.value)

};



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
export default Header;