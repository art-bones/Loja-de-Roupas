import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Grid, Typography, Button, makeStyles } from '@material-ui/core/';
import cartActions from './store/actions/cart'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '5px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
}));

const Card = ({ product }) => {

    const classes = useStyles();
    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch();

    return (
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Grid container direction='column'>
                    <Grid item>
                        <img width="140px" src={product.image} alt={product.name_product} />
                        <Typography variant='h6'>
                        {product.name_product}
                        </Typography>
                        <Typography variant='subtitle1'>
                            R$ {product.price}
                        </Typography>
                    </Grid>
                    <Button variant="contained" onClick={() => dispatch(cartActions.Add(cart, product))}>Adicionar</Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card;