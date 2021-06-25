import './MapDisplay.css';
import React from 'react';
import SearchBar from './SearchBar';


const MapDisplay = props => {
    const { lat, long } = props;


    return (
        <div >
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar />
            </div>

            <p className="gps-text">Your Latitude is {lat} and your longitude is {long}</p>
        </div>
    )
}



export default MapDisplay;