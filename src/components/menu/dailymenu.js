import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './dailymenu.css';

const Menu = (props) => {
    const [menu, getMenu] = useState([])
    const [menuDate, setMenuDate] = useState(props.today)

    useEffect(() => {
        
        Axios.get(`http://localhost:3333/api/menu/${menuDate}`)
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
        <div className='menu'>
            <h1>{`${menuDate}'s Menu`}</h1>
            {menu.map((line, i) => (
                <div key={line.product_id} className='itemLine'>
                    <div className='itemImg'>
                        <img src={`https://via.placeholder.com/250x300?text=${line.item}`} alt={`stock link to represent ${line.item}`} />
                    </div>
                    <div className='item'>
                        <h4>{line.item} | ${line.item_price}</h4>
                        <p><em>{line.item_description}</em></p>
                    </div>
                    <div className='stock'>
                        <p>{line.item_inventory}</p>
                    </div>
                </div>
            ))}
            {button}
        </div>
    )
}

export default Menu;