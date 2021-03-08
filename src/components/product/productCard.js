import React from 'react';

import sampleProduct from '../../imgs/sampleProduct.png';

import './productCard.css';

const productCard = (props) => {
    const product = props.location.state.product
    console.log(props.location.state.product);
    return (
        <div className='productLine'>
            <div className="productImg">
                <img src={product.image || sampleProduct} alt={`stock link to represent ${product.item}`} />
            </div>
            <div className="productDetails">
                <h4>{product.item} | ${product.item_price}</h4>
                <p><em>{product.item_description}</em></p>
            </div>
            <div className="inventory">
                <p>{product.item_inventory}</p>
            </div> 
        </div>
    );
}

export default productCard;
