import React from 'react';
import { Link } from 'react-router-dom';
import products from "../data/products";
const ProductList = () => {
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
