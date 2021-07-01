import './MapDisplay.css';
import React from 'react';
import Accordion from './Accordion';
import SearchBar from './SearchBar';
import unplash from '../api/unplash';
import ImageList from './ImageList';


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


class MapDisplay extends React.Component {

    constructor(props) {
        super(props)

        this.state = { lat: props.lat, long: props.long, images: [] };

    }

    onSearchSubmit = async (term) => {
        const response = await unplash.get('/search/photos', {
            params: { query: term }
        });

        console.log(response.data.results)
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div >
                <p className="gps-text">Your Latitude is {this.state.lat} and your longitude is {this.state.long}</p>
                <Accordion className="accordion" items={items} />
                <div className="ui container" style={{ marginTop: '20px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <ImageList images={this.state.images} />
                </div>

            </div>
        )
    }
}



export default MapDisplay;