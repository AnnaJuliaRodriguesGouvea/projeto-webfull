import * as React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import {
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment, InputLabel,
    MenuItem, NativeSelect,
    Radio,
    RadioGroup,
    Select,
    TextField
} from "@mui/material";

const InputSearch = () => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column' , justifyContent: 'center', alignItems: 'center', margin: "2%" }}>
            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    // value={selectedRadio}
                    // onChange={handleRadioChange}
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
                        defaultValue={5}
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
                error
                helperText="Incorrect entry."
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                sx={{ width: '45%' }}
            />
        </Container>
    );
}

export default InputSearch;
