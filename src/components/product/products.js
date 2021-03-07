import React from 'react';

import ProductCard from '../product/productCard';

import './products.css';

const Products = (props) => {
    const productList = props.products.sort((a, b) => a.id > b.id ? 1 : -1)

    return (
        <div className='wrapper'>
            {productList.map((product, i) => (
                // <div className='productPreview'>

                // </div>
                <ProductCard key={product.id} product={product} cardtype={`product`}/>
            ))}
        </div>
    )
}

export default Products;