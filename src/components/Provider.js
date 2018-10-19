import React, { Component } from "react";
import flip from "geojson-flip";

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
  };

  componentDidMount() {
    return new Promise((resolve, reject) => {
      fetch(
        "https://raw.githubusercontent.com/CodeForCary/cary-connects-data/master/business.geojson"
      )
        .then(response => response.json())
        .then(rawJSON => rawJSON.features)
        .then(data => resolve(this.setState({ businessData: data })))
        .catch(err => reject(err));
      fetch(
        "https://raw.githubusercontent.com/CodeForCary/cary-connects-data/master/parking.geojson"
      )
        .then(response => response.json())
        .then(rawJSON => flip.flip(rawJSON.features))
        .then(data => resolve(this.setState({ parkingData: data })))
        .catch(err => reject(err));
    });
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          getLocation: location => {
            this.setState({
              location: {
                lat: location.latlng.lat,
                lng: location.latlng.lng
              }
            });
          },
          relocater: name => {
            let feature = this.state.businessData.find(
              feature => feature.properties.name === name.name
            );
            this.setState({
              location: {
                lat: feature.geometry.coordinates[1],
                lng: feature.geometry.coordinates[0]
              },
              zoom: 18
            });
          }
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
