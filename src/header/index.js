import React,  { useState } from "react";
import APIkey from "../config/APIKEY";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container } from "@mui/system";
import { Headerc } from "./styled";


function Header () {
const [movie, setMovie] = useState('')
const [error] = useState (null)

const handleMovie = (e) => {
  setMovie(e.target.value)
}

let navigate = useNavigate();

const handleApi = () => { navigate(movie)
  axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=pt-PT&page=1`)
  .then(result => {
    var filtered_json = result.data.results.find(item => item.title === movie)
    if(filtered_json){navigate("/details/"+filtered_json.id);}
  })
  try {
  throw Error ();
}catch (err) {
  console.log({err});
};
}
//sx={{ bgcolor: '#E32009'}}
return (
      
    <Container sx={{ maxWidth:'100%', bgcolor: '#E32009'}} maxWidth={false}> 
      <Headerc>
        <h1><Link className="Linkto" to={"/"}>FILMES ONLINE</Link></h1>
        <TextField color="error" value={movie} className="txt" onChange= {handleMovie} id="filled-basic" label="Pesquisar" variant="filled" />
        <Button className="BTN" onClick={handleApi} variant="contained">Pesquisar</Button>
        {error && <div> {error}</div>}
      </Headerc>
    </Container>
      
)
}
export default Header;
