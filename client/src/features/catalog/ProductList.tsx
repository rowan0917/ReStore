import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props{
    products: Product[];
}

export default function ProductList({products} : Props){
    return(
        <Grid container spacing={3}>
            {products.map((products) => (
                <Grid item xs={4} key={products.id}>
                    <ProductCard  products={products} />
                </Grid>
        ))}
        </Grid>
    )
}