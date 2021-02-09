import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './products.css';

const Products = () => {
    const [productList, getProductList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3333/api/products')
            .then(res => {
                getProductList(res.data)
                return res;
            })
            .catch(err => console.log(err));
    }, []);

    console.log(productList)
    return (
        <div className='productsPage'>
            {productList.map((product, i) => (
                <div className='product' key={product.id}>
                    <div className='productImg'>
                        <img src={`https://via.placeholder.com/250x300?text=${product.item}`} alt={`stock link to represent ${product.item}`} />
                    </div>
                    <div className='productDetails'>
                        <div className='productTitle'>{product.item}</div>
                        <div className='productDescription'>{product.item_description}</div>
                    </div>
                    <div className='inventory'>
                        <div className='productAdjust'>remove product</div>
                        <div className='currentStock'>{product.item_inventory}</div>
                        <div className='productAdjust'>add product</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;