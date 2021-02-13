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

    // const adjustProduct = async (e, adjustment, id) => {
    //     e.preventDefault();
    //     await AxiosInstance.put(`/products/${adjustment}/${id}`, { amount: 1 })
    //         .then(res => {
    //             const productIndex = productList.findIndex(product => product.id === id)
    //             productList[productIndex].item_inventory = res.data[0].item_inventory
    //             getUpdatedProductList(productList);
    //             return productList;
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div className='productsPage'>
            {productList.map((product, i) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Products;