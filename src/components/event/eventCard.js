import React from 'react';

const EventCard = (props) => {
    return (
        <div className='eventCard'>
            <h3>{props.event.event}</h3>
            <h4>{props.event.start} - {props.event.finish}</h4>
            <p>`${props.event.address}, ${props.event.city}, ${props.event.state}`</p>
            <p>{props.event.description}</p>
            <h3>Products</h3>
            {props.event.products.map((productId, i) => {
                <p key={i}>product #{productId}</p>
            })}


        </div>
    )
}

export default EventCard;