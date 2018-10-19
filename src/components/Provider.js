import React, { Component } from 'react';

export const Context = React.createContext();

class Provider extends Component {
    state = {
        businessData: null,
        parkingData: null,
        location: {
            lat: 35.787317,
            lng: -78.781226
        },
        zoom: 15
    }
    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                getLocation: (location) => {
                    console.log('from click: ', location.latlng)
                    this.setState({
                        location: {
                            lat: location.latlng.lat,
                            lng: location.latlng.lng
                        }
                    });
                }
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Provider;