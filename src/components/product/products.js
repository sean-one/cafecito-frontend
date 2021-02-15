import React, { useState, useEffect } from 'react';
import AxiosInstance from '../../helpers/axios';

import ProductCard from '../product/productCard';

import './products.css';

const Products = () => {
    const [productList, getProductList] = useState([]);
    // const [updatedProductList, getUpdatedProductList] = useState([]);

    useEffect(() => {
        AxiosInstance.get('/products')
            .then(res => {
                // sort the product list by product.id
                getProductList(res.data.sort((a, b) => a.id > b.id ? 1 : -1))
                return res;
            })
            .catch(err => console.log(err));
            // if adding adjustProduct add "updatedProductList" to array
    }, []);

    return (
        <div className='productsPage'>
            {productList.map((product, i) => (
                <ProductCard key={product.id} product={product} cardtype={`product`}/>
            ))}
        </div>
    )
}

export default Products;