import React from 'react';

import sampleProduct from '../../imgs/sampleProduct.png';

import './productCard.css';

const productCard = (props) => {
    return (
        <div className='productLine'>
            <div className="productImg">
                <img src={props.product.image || sampleProduct} alt={`stock link to represent ${props.product.item}`} />
            </div>
            <div className="productDetails">
                <h4>{props.product.item} | ${props.product.item_price}</h4>
                <p><em>{props.product.item_description}</em></p>
            </div>
            <div className="inventory">
                <p>{props.product.item_inventory}</p>
            </div> 
        </div>
    );
}

export default productCard;
