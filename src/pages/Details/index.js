import IMG from "./img";
import APIkey from "../../config/APIKEY";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "./styled";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Details () {
    const {id} = useParams ()
    
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=pt-PT&page=1`)
        .then (response => response.json())
        .then (data => { 

            const {title, poster_path, overview, release_date} = data

            const movies = {
                id,
                title,
                sinopse: overview,
                image: `${IMG}${poster_path}`,
                releaseDate: release_date
            }
            setMovies(movies)
        })
    },[id])

    return (
        <Container>
            <div className="movie">
                <img src={movies.image} alt={movies.sinopse}></img>
                <div className="details">
                    <h1>{movies.title}</h1>
                    <span>Sinopse: {movies.sinopse}</span>
                    <span className="release-date">Data de lançamento: {movies.releaseDate}</span>
                    <Stack className="Stck" spacing={2} direction="row">
                        <Button variant="contained"><Link className="Linkto" to="/">Retornar</Link></Button>
                    </Stack>
                </div>
            </div>
        </Container>  
    )
};

export default Details;