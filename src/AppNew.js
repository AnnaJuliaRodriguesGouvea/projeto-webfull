import HeaderNew from "./components/HeaderNew";
import Introduction from "./components/Introduction";
import Container from "@mui/material/Container";
import InputSearch from "./components/InputSearch";
import FruitCardNew from "./components/FruitCardNew";
import React, {useEffect, useState} from "react";
import {Grid, Pagination} from "@mui/material";
import {findAll} from "./service/FruitService";
import Card from "@mui/material/Card";
const App = () => {
    const [fruits, setFruits] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        setPageCount(pageCount);
    }, [pageCount]);

    useEffect(() => {
        (async () => {
            let result = await findAll()
            setPageCount(Math.ceil(result.length / limit))
            result = result.slice((page - 1) * limit, (limit * page))
            setFruits(result)

        })()
    }, [limit, page]);

    return (
        <div>
            <HeaderNew/>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Introduction/>
                <InputSearch/>
            </Container>
            <Container sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginY: '2%'
            }}>
                <Grid container spacing={3}>
                    {fruits.map((fruit) => (
                        <FruitCardNew/>
                    ))}
                </Grid>
            </Container>
            <Container sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginY: '2%'
            }}>
                <Pagination
                    count={pageCount}
                    page={page}
                    onChange={(event, newPage) => setPage(newPage)}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                />
            </Container>
        </div>
    )
}

export default App;