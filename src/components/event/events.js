import React, { useState, useEffect } from 'react';

import EventCard from './eventCard';
import eventSampleData from '../../eventsData';

import './events.css';

const Events = (props) => {
    const [ upcomingEvents, getUpcomingEvents ] = useState([]);

    useEffect(() => {
        getUpcomingEvents(eventSampleData.sort((a, b) => a.start > b.start ? 1 : -1))
    }, [])

    // console.log(upcomingEvents)
    return (
        <div className='wrapper'>
            {upcomingEvents.map((singleEvent, i) => (
                <EventCard key={i} event={singleEvent} products={props.products} />
            ))}
        </div>
    )

}

export default Events;