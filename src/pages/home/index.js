import React from "react";
import { useState, useEffect} from "react";
import Movie from "./../../components/Movie"


const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e8fa4eae0c5122fbf1082350028a12f7&language=pt-PT&page=1';


function Home() {

const [movies, setMovies] = useState([])


useEffect (() => {
   fetch (FEATURED_API)
   .then(res => res.json())
   .then(data => {
    console.log(data.results)
    setMovies(data.results);
   }) 
}, []);

return (
    <>
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