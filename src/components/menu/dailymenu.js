import React, { useState, useEffect } from 'react';
import AxiosInstance from '../../helpers/axios';

import ProductCard from '../product/productCard';

import './dailymenu.css';

const Menu = (props) => {
    const [menu, getMenu] = useState([])
    const [menuDate, setMenuDate] = useState(props.today)

    useEffect(() => {
        
        AxiosInstance.get(`/api/menu/${menuDate}`)
            .then(res => {
                // check to make sure there is inventory 
                const stocked = res.data.filter((product, i) => product.item_inventory > 0)
                getMenu(stocked)
                return res;
            })
            .catch(err => console.log(err));
    }, [menuDate])

    // go back to todays menu
    const todaysmenu = (e) => {
        e.preventDefault();
        setMenuDate(props.today)
    }

    // sneak peak at tomorrows menu | pre-order
    const sneakpeak = (e) => {
        e.preventDefault()
        setMenuDate(props.tomorrow)
    }

    // conditional render on button based on the day of the menu
    let button;
    if (menuDate === props.today) {
        button = <button onClick={sneakpeak}>sneak peak</button> 
    } else {
        button = <button onClick={todaysmenu}>back to today</button> 
    }

    return (
        <div className='menu wrapper'>
            <h3>{`${menuDate}'s Menu`}</h3>
            {menu.map((line, i) => (
                <ProductCard key={line.product_id} product={line} />
            ))}
            {button}
        </div>
    )
}

export default Menu;