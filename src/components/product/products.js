import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './products.css';

const Products = () => {
    const [productList, getProductList] = useState([]);
    const [updatedProductList, getUpdatedProductList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3333/api/products')
            .then(res => {
                // sort the product list by product.id
                getProductList(res.data.sort((a, b) => a.id > b.id ? 1 : -1))
                return res;
            })
            .catch(err => console.log(err));
    }, [updatedProductList]);

    const adjustProduct = async (e, adjustment, id) => {
        e.preventDefault();
        await Axios.put(`http://localhost:3333/api/products/${adjustment}/${id}`, { amount: 1 })
            .then(res => {
                const productIndex = productList.findIndex(product => product.id === id)
                productList[productIndex].item_inventory = res.data[0].item_inventory
                getUpdatedProductList(productList);
                return productList;
            })
            .catch(err => console.log(err))
    }

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
                        <div className='inventoryItem productAdjust'>
                            <button name={product.id} onClick={e => adjustProduct(e, 'removeProduct', product.id)}>-</button>
                        </div>
                        <div className='inventoryItem currentStock' key={product.id}>{product.item_inventory}</div>
                        <div className='inventoryItem productAdjust'>
                            <button name={product.id} onClick={e => adjustProduct(e, 'addProduct', product.id)}>+</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;