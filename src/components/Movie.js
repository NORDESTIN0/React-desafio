import React from "react";
import { Link } from "react-router-dom";

const IMG_API =  'https://image.tmdb.org/t/p/w500';

const Movie = ({id,title, poster_path, overview, vote_average }) => 
       (<div className="movie">
            <Link to={`details/${id}`}><img src={IMG_API + poster_path} alt={title}/></Link>
            <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
            </div>

            <div className="movie-over" >
                <h2>Resumo</h2>
                <p>{overview}</p>
            </div>
        </div>
        )
        ;

export default Movie;