import * as React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import {
    Alert,
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment, InputLabel,
    NativeSelect,
    Radio,
    RadioGroup,
    TextField
} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../App";
import {findAll} from "../service/FruitService";

const InputSearch = () => {
    const context = useContext(AppContext)
    const [selectedRadio, setSelectedRadio] = useState('');
    const [searchText, setSearchText] = useState('');
    const [selectedLimit, setSelectedLimit] = useState(6);
    const [error, setError] = useState(false)
    const [textError, setTextError] = useState("")
    const [alertError, setAlertError] = useState(false)

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value);
    };

    const handleSelectChange = (event) => {
        setSelectedLimit(event.target.value)
        context.setLimit(event.target.value)
        context.setPage(1)
    }

    const handleInputChange = (event) => {
        setSearchText(event.target.value.toLowerCase());
    };

    const handleSearch = async () => {
        context.setPage(1)
        await search()
    }

    const isValidFilters = () => {
        return !(selectedRadio === '' || searchText === '' || context.limit < 1 || context.page < 1)
    }

    const search = async () => {
        if(isValidFilters()) {
            setError(false)
            setAlertError(false)
            setTextError("")
            let result = await findAll()
            switch (selectedRadio) {
                case 'nome':
                    result = result.filter((fruit) => fruit.name.toLowerCase().includes(searchText));
                    break;
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
                //Apresentar erro de dados nao encontrados
                setAlertError(true)
                // return result
            }
            context.setPageCount(Math.ceil(result.length / context.limit))
            result = result.slice((context.page - 1) * context.limit, (context.limit * context.page))
            context.setFruits(result)
            return result
        } else {
            console.log("TESTE")
        }
        //Apresentar erro de validacao
        setError(true)
        setTextError("Preencha os campos acima")
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
        <Container sx={{ display: 'flex', flexDirection: 'column' , justifyContent: 'center', alignItems: 'center', margin: "2%" }}>
            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedRadio}
                    onChange={handleRadioChange}
                    sx={{ marginBottom: '1%' }}
                >
                    <FormControlLabel value="nome" control={<Radio />} label="Nome" />
                    <FormControlLabel value="genero" control={<Radio />} label="Gênero" />
                    <FormControlLabel value="familia" control={<Radio />} label="Família" />
                    <FormControlLabel value="ordem" control={<Radio />} label="Ordem" />
                </RadioGroup>
                <FormControl sx={{ marginBottom: '2%', width: '10%' }}>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Itens Por Página
                    </InputLabel>
                    <NativeSelect
                        value={selectedLimit}
                        onChange={handleSelectChange}
                        inputProps={{
                            name: 'limit',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={6}>6</option>
                        <option value={12}>12</option>
                        <option value={18}>18</option>
                    </NativeSelect>
                </FormControl>
            </Container>
            <TextField
                error={error}
                helperText={textError}
                placeholder="Pesquisar..."
                value={searchText}
                onChange={handleInputChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleSearch}
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                sx={{ width: '45%' }}
            />
            {alertError ? (
                <Alert sx={{marginTop: '1%'}} severity="warning">Não foram encontrados dados para essa busca</Alert>
            ): null}
        </Container>
    );
}

export default InputSearch;
