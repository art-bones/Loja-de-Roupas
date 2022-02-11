import React from "react";
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from "./Cart";


const Header = () => {
    return (
        <Grid container direction="row" justify="space-between" alignItems="center">
            <Typography variant='h3'>
                Soccer Shopping
            </Typography>
            <Link to="/">
                <Button variant="outlined">Home</Button>
            </Link>
            <Link to="/contato">
                <Button variant="outlined">Contato</Button>
            </Link>
            <Cart />
        </Grid>
    )
}

export default Header