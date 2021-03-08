import React from 'react';
import { Link } from 'react-router-dom';

import sampleProduct from '../../imgs/sampleProduct.png'

import './productPreview.css';

const productPreview = (props) => {
    const product = props.product;
    return (
        <div className='preview'>
            <div className='previewImage'>
                <Link to={{
                    pathname: `/products/${product.id}`,
                    state: {
                        product
                    }
                }}>
                    <img src={sampleProduct} alt={`sample text for ${product.item}`} />
                </Link>
            </div>
            <div className='previewName'>
                <h3>{product.item}</h3>
            </div>
        </div>
    )
}

export default productPreview;