import './MapDisplay.css';
import React from 'react';


const MapDisplay = props => {
    const { lat, long } = props;


    return (
        <div >
            <p className="gps-text">Your Latitude is {lat} and your longitude is {long}</p>
        </div>
    )
}



export default MapDisplay;