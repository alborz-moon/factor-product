import React from 'react';
import { Link } from 'react-router-dom';
import products from "../data/products";
const ProductDetails = ({ match }) => {
    const productId = parseInt(match.params.id);
    const product = products.find((p) => p.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h2>Product Details</h2>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div style={{width:300,height:200}}>
                <img src={product.imageUrl} style={{width: '100%', height: '100%', objectFit: 'cover'}} alt={product.name}/>
            </div>
            <Link to="/">Back to Invoice</Link>
        </div>
    );
};

export default ProductDetails;
