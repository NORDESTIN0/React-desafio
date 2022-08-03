import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {Headerc} from "./styled"

function Header () {
    return(
    <Headerc>
        <h1>Filmes Onlines
    <Box className="Box"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField className="Textfield" id="standard-basic" label="Buscar Filme" variant="filled" /></Box></h1>
        </Headerc>
    )
}

export default Header;