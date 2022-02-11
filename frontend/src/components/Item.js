import React from "react";
import { ListItem, ListItemText } from '@material-ui/core/';

const Item = ({name, quantity}) => {
    return (
        <ListItem>
            <ListItemText primary={name}secondary={quantity} />
        </ListItem>
    )
}

export default Item;