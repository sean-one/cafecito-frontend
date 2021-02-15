import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import AxiosInstance from '../../helpers/axios';

const ProductEdit = () => {
    let { url } = useRouteMatch()
    const [productDetails, setProductDetails] = useState()
    // console.log(path)
    // console.log(url)
    
    useEffect(() => {
        AxiosInstance.get(`${url}`)
            .then(res => {
                setProductDetails(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            this is the edit card
        </div>
    );
};


export default ProductEdit;
