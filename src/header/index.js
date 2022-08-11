import React,  { useState } from "react";
import APIkey from "../config/APIKEY";
import {Headerc} from "./styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Header () {
const [movie, setMovie] = useState('')
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
  throw Error ("Foi nãozinho viu");
}catch (error) {
  console.log( {error});
};
}

return (
      <Headerc>
        <h1 className="H1">FILMES ONLINE</h1>
        <TextField color="error" className="txt" value={movie} onChange= {handleMovie} id="filled-basic" label="Pesquisar" variant="filled" />
        <Button className="BTN" onClick={handleApi} variant="contained">Pesquisar</Button>
      </Headerc>
)
}
export default Header;
