import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props{
    product: Product[];
}

export default function ProductList({product} : Props){
    return(
        <Grid container spacing={3}>
            {product.map((product) => (
                <Grid item xs={4} key={product.id}>
                    <ProductCard  product={product} />
                </Grid>
        ))}
        </Grid>
    )
}