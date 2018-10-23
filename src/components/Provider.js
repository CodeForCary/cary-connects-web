import React, { Component } from "react";
import flip from "geojson-flip";
import filterLocation from './NavigationMenu/filterLocation'

export const Context = React.createContext();

class Provider extends Component {
  constructor(props) {
    super(props);

  this.state = {
    selectedMapItem: null,
    businessData: null,
    parkingData: null,
    location: {
      lat: 35.787317,
      lng: -78.781226
    },
    zoom: 15,
    filteredLocation: filterLocation("", 0),
    handleSearchChange: null,
    searchValue: ""
  };
}

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

  refocusLocation = name => {
    let feature = this.state.businessData.find(
      feature => feature.properties.name === name.name
    );
    this.setState({
      location: {
        lat: feature.geometry.coordinates[1],
        lng: feature.geometry.coordinates[0]
      },
      zoom: 17.33,
      filteredLocation: filterLocation("", 0),
      searchValue: name.name
    });
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          clickPolygon: event => {
            const name = event.target.options.name;
            const parkingData = this.state.parkingData.filter(
              polygon => polygon.properties.name === name
            );
            console.log(parkingData);
            this.setState({
              selectedMapItem: parkingData
            });
          },
          moveMap: location => {
            this.setState({
              location: {
                lat: location.latlng.lat,
                lng: location.latlng.lng
              },
              zoom: location.zoom
            });
          },
          chooseBusiness: this.refocusLocation,
          handleSearchChange: event => {
            if (event.target.value == 0) {
              this.setState({
              filteredLocation: filterLocation(event.target.value, 0),
              searchValue: event.target.value
            });
          } else {
            this.setState({
              filteredLocation: filterLocation(event.target.value, 7, this.state.businessData),
              searchValue: event.target.value
            })
          }},
          clearResults: event => {
            this.setState({
              filteredLocation: filterLocation("", 0)
            })
          },
          clearSearch: event => {
            this.setState({
              searchValue: ""
            })
          }
      }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
