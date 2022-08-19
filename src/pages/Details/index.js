import IMG from "./img";
import APIkey from "../../config/APIKEY";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';

function Details () {
    const {id} = useParams ()
    
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=pt-PT&page=1`)
        .then (response => response.json())
        .then (data => { 

            const {title, poster_path, overview, release_date, vote_average} = data

            const movies = {
                id,
                title,
                sinopse: overview,
                image: `${IMG}${poster_path}`,
                releaseDate: release_date,
                votos: vote_average,
            }
            setMovies(movies)
        })
    },[id]);


    return (
            <div className="movie-card">
                <img className="Img-movie" src={movies.image} alt={movies.sinopse}></img>
                <div className="details-movie">
                    <h1>{movies.title}</h1>
                    <span>Sinopse: {movies.sinopse}</span>
                    <span>Critica: {movies.votos} <StarIcon/></span>
                    <span className="release-date">Data de lançamento:{movies.releaseDate}</span>
                    <Stack className="Stck" spacing={2} direction="row">
                    <Link className="Linkto" to="/" style={{ textDecoration: 'none', color: "white"}}><Button variant="contained">Retornar</Button></Link>
                    </Stack>
                </div>
            </div>
    )
};

export default Details;