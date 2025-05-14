import Product from "./Product";
import {products} from '../seeds';
import { useState } from "react";

function ProductList() {
    const [prods, setProds] = useState(products) //InitialState
    const [descendent, setDescendent] = useState(false);

    const handleProductVote = (id, vote) => {

        const updateProducts = prods.map( p => {
            if(p.id === id){
                return {...p, votes: p.votes + vote }
            } else {
                return p;
            }
    })

    setProds(updateProducts);

    }

    const changeSort = () => {
        setDescendent(!descendent)
    }

    const sorteProducts = prods.sort( (a, b) => ( descendent ? (a.votes - b.votes) : (b.votes - a.votes)));

    const productCompoments = sorteProducts.map( product => (
    <Product 
            key = {'prod-' +product.id}            
            id = {product.id}
            title = {product.title}
            description = {product.description}
            url = {product.url}
            votes = {product.votes}
            productImageUrl = {product.productImageUrl}
            submitterAvatarUrl = {product.submitterAvatarUrl}
            ChangeVote = {handleProductVote}
            />

    ));

    return (
        <section className="ui unstackable items">
            <button onClick={changeSort}>Up / Down</button>
            {productCompoments}
        </section>
    );
}

export default ProductList;