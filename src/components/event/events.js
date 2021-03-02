import React, { useState, useEffect } from 'react';

import EventCard from './eventCard';
import eventSampleData from '../../eventsData';

import './events.css';

const Events = () => {
    const [ upcomingEvents, getUpcomingEvents ] = useState([]);

    useEffect(() => {
        getUpcomingEvents(eventSampleData)
    }, [])

    console.log(upcomingEvents)
    return (
        <div className='eventsPage'>
            <h1>events gonna go here</h1>
            {upcomingEvents.map((singleEvent, i) => (
                <EventCard key={i} event={singleEvent} />
            ))}
        </div>
    )

}

export default Events;