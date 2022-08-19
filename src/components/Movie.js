import React from "react";
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

const IMG_API =  'https://image.tmdb.org/t/p/w500';
function refreshPage() {     setTimeout(()=>{         window.location.reload(false); 
    }, 500);
    console.log('page to reload') } 

const Movie = ({id,title, poster_path, overview, vote_average }) => 
       (<div className="movie">
            <Link to={`details/${id}`} onClick={refreshPage}><img src={IMG_API + poster_path} alt={title}/></Link>
            <div className="movie-info">
            <h3>{title}</h3>
            <span><StarIcon/></span>
            <span>{vote_average}</span>
            </div>

            <div className="movie-over" >
                <h2>Resumo</h2>
                <Link onClick={refreshPage} to={`details/${id}`} style={{ textDecoration: 'none' , color: "black"}}><p>{overview}</p></Link>
            </div>
        </div>
        )
        ;

export default Movie;