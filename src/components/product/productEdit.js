import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import AxiosInstance from '../../helpers/axios';

const ProductEdit = () => {
    let { url } = useRouteMatch()
    const [productDetails, setProductDetails] = useState()
    
    useEffect(() => {
        AxiosInstance.get(`${url}`)
            .then(res => {
                setProductDetails(res.data)
            })
            .catch(err => console.log(err));
    }, [url]);
    console.log(productDetails)
    let editProduct;
    if (productDetails === undefined) {
        editProduct = <div>'Loading...'</div>
    } else {
        editProduct = 
            <form className="editProductLine">
                <input type="text" name="item" value={'Product Title' || productDetails.item} />
                <input type="text" name="description" value={'Product Description' || productDetails.item_description} />
                <input type="number" name="price" step="0.01" value={0 || productDetails.item_price} />
                <input type="number" name="inventory" value={0 || productDetails.item_inventory} />
            </form>
    }
    
    {/* id: 2, item: "killer cold brew", item_description: "cafecito coffe poured over ice", item_price: 10, item_inventory: 9 */}
    return (
        <>
            {editProduct}
        </>
    );
};


export default ProductEdit;
