import React, { useState, useEffect } from 'react';

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
        </div>
    )

}

export default Events;