import './MapDisplay.css';
import React from 'react';
import Accordion from './Accordion';

const items = [
    {
        title: 'Test1',
        content: 'This is the first test'
    },
    {
        title: 'Test2',
        content: 'This is the second test'
    },
    {
        title: 'Test3',
        content: 'This is the third test'
    }
];


const MapDisplay = props => {
    const { lat, long } = props;


    return (
        <div >
            <p className="gps-text">Your Latitude is {lat} and your longitude is {long}</p>
            <Accordion className="accordion" items={items} />
        </div>
    )
}



export default MapDisplay;