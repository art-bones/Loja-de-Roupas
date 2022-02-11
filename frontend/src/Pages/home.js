import React from 'react';
import { Paper, Grid, Typography, List, makeStyles } from '@material-ui/core/';
import Item from '../components/Item';
import Card from '../components/Card';
import { connect } from 'react-redux';


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

const HomePage = ({ products }) => {
    const classes = useStyles();
    const categorys = products.map(
        category => {
            const container = {};
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )

    const category = categorys.map(JSON.stringify).filter(function (item, index, arr) {
        return arr.indexOf(item, index + 1) === -1
    }).map(JSON.parse);

    const arrayCategory = categorys.map(category => category.name);
    let count = {};

    for (let i = 0; i < arrayCategory.length; i++) {
        let key = arrayCategory[i];
        count[key] = (count[key] ? count[key] + 1 : 1)
    }


    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Typography variant='h5'>
                        Categorias
                    </Typography>
                    <List>
                        {category.map(
                            category => {
                                return (
                                    <Item key={category.id} name={category.name} quantity={count[category.name]} />
                                )
                            }
                        )}
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={9} container spacing={3} className={classes.root}>
                {products.map(item => {
                    return (
                        <Card key={item.id_product} product={item} />
                    )
                })}
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(HomePage);