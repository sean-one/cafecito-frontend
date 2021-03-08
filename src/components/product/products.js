import React from 'react';

import ProductPreview from '../product/productPreview';
// import ProductCard from '../product/productCard';

import './products.css';

const Products = (props) => {
    const productList = props.products.sort((a, b) => a.id > b.id ? 1 : -1)

    return (
        <div className='wrapper product'>
            {productList.map((product, i) => (
                <ProductPreview key={product.id} product={product} />
                // <ProductCard key={product.id} product={product} cardtype={`product`}/>
            ))}
        </div>
    )
}

export default Products;