import React from 'react';

class SearchBar extends React.Component {
    state = { vessel: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.vessel);
    }


    render() {
        return (
            <div className="ui segment" >
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Vessel Finder</label>
                        <input 
                        type="text" 
                        value={this.state.vessel} 
                        onChange={(e) => this.setState({ vessel: e.target.value })} />
                    </div>
                </form>
                
            </div>


        );
    }
};

export default SearchBar;