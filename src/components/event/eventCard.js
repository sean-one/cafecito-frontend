import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';

import sampleImage from '../../imgs/sampleEventImage.jpg';

import './events.css';

const EventCard = (props) => {
    const eventDate = Moment(props.event.start);
    let productList = props.products;
    
    // set up event menu
    productList = productList.filter(({ id }) => props.event.products.includes(id));
    
    return (
        <div className='eventCard'>
            <div className='eventImage'>
                <img src={sampleImage} alt='upcoming event' />
            </div>
            <div className='eventDetails'>
                <h1>{props.event.event.toUpperCase()}</h1>
                <h4>{eventDate.local(true).format('dddd')}</h4>
                <p>{`${props.event.address}, ${props.event.city}, ${props.event.state}`}</p>
                <p>{props.event.description}</p>
                <h3>{`Products:`}</h3>
                <div className='eventMenu'>
                    {productList.map(product => (
                        <Link key={product.id} to={{
                            pathname: `/products/${product.id}`,
                            state: {
                                product
                            }
                        }}>
                            <p className='eventProduct' key={product.id}>{`${product.item}`}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EventCard;