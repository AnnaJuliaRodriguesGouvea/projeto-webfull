import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {FormControlLabel, IconButton, MenuItem, Radio, RadioGroup, Select} from "@mui/material";
import {findAll} from "../service/FruitService";
import {useContext, useEffect} from "react";
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
  const [selectedLimit, setSelectedLimit] = React.useState(5);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
    setSearchEnabled(true);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const handleSelectChange = (event) => {
    setSelectedLimit(event.target.value)
    context.setLimit(event.target.value)
    context.setPage(1)
  }

  const isValidFilters = () => {
    return !(selectedRadio === '' || searchText === '' || context.limit < 1 || context.page < 1)
  }

  const handleSearch = async () => {
    context.setPage(1)
    await search()
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
      console.log(searchText)
      context.setPageCount(Math.ceil(result.length / context.limit))
      result = result.slice((context.page - 1) * context.limit, (context.limit * context.page))
      context.setFruits(result)
      return result
    }
   //Apresentar erro de validacao
  }

  useEffect(() => {
    (async () => {
      if(isValidFilters()) {
        await search()
      } else {
        let result = await findAll()
        context.setPageCount(Math.ceil(result.length / context.limit))
        result = result.slice((context.page - 1) * context.limit, (context.limit * context.page))
        context.setFruits(result)
      }
    })()
  }, [context.page, context.limit]);

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
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedLimit}
              label="Limite"
              onChange={handleSelectChange}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
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
                <IconButton aria-label="pesquisar" onClick={handleSearch}>
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
