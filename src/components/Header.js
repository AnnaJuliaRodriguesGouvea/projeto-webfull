import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Button, FormControlLabel, IconButton, Radio, RadioGroup, TextField} from "@mui/material";
import {findAll} from "../service/FruitService";
import {useContext} from "react";
import {FruitContext} from "./ListaFrutas";
import {AppContext} from "../App";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 2),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '35ch',
      },
    },
  },
}));

export default function Header() {
  const context = useContext(AppContext)
  const [searchEnabled, setSearchEnabled] = React.useState(false);
  const [selectedRadio, setSelectedRadio] = React.useState('');
  const [searchText, setSearchText] = React.useState('');

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
    setSearchEnabled(true);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const isValidFilters = () => {
    return !(selectedRadio === '' || searchText === '')
  }

  const search = async () => {
    if(isValidFilters()) {
      let result = await findAll()
      switch (selectedRadio) {
        case 'genero':
          result = result.filter((fruit) => fruit.genus.toLowerCase().includes(searchText));
          break;
        case 'familia':
          result = result.filter((fruit) => fruit.family.toLowerCase().includes(searchText));
          break;
        case 'ordem':
          result = result.filter((fruit) => fruit.order.toLowerCase().includes(searchText));
          break;
      }
      if (result.length === 0) {
        console.log("Erro")
        //Apresentar erro de dados nao encontrados
      }
      context.setFruits(result)
      return result
    }
   //Apresentar erro de validacao
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'green' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            FRUITYVICE
          </Typography>
          <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={selectedRadio}
              onChange={handleRadioChange}
          >
            <FormControlLabel value="genero" control={<Radio />} label="Gênero" />
            <FormControlLabel value="familia" control={<Radio />} label="Família" />
            <FormControlLabel value="ordem" control={<Radio />} label="Ordem" />
          </RadioGroup>
          {searchEnabled && (
              <Search>
                <IconButton aria-label="pesquisar" onClick={search}>
                  <SearchIcon />
                </IconButton>

                <StyledInputBase
                    placeholder="Procurar..."
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchText}
                    onChange={handleInputChange}
                />
              </Search>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
