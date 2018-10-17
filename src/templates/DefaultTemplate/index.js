import React, { Component } from 'react'
import NavigationMenu from 'src/components/NavigationMenu'
import Map from 'src/components/Map'
import flip from 'geojson-flip'

export default class DefaultTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businessData: null,
      parkingData: null,
      location: {
        lat: 35.787317,
    		lng: -78.781226
      },
      zoom: 15,
    };
  }

  componentDidMount() {
    return new Promise((resolve, reject) => {
      fetch('https://raw.githubusercontent.com/CodeForCary/cary-connects-data/master/business.geojson')
        .then(response => response.json())
        .then(rawJSON => rawJSON.features)
        .then(data => resolve(this.setState({ businessData: data })))
        .catch(err => reject(err));
      fetch('https://raw.githubusercontent.com/CodeForCary/cary-connects-data/master/parking.geojson')
        .then(response => response.json())
        .then(rawJSON => flip.flip(rawJSON.features))
        .then(data => resolve(this.setState({ parkingData: data })))
        .catch(err => reject(err));
    });
  }

  relocater = (property) => {
    let feature = this.state.businessData
      .find(feature => feature.properties.name === property.name);
    this.setState({
      location: {
        lat: feature.geometry.coordinates[1],
        lng: feature.geometry.coordinates[0]
      },
      zoom: 18
    });
  };

  moveMap(location, zoom) {
    this.setState({
      location: location,
      zoom: zoom
    });
  }


  render () {
    const { businessData } = this.state;
    const { parkingData } = this.state;

    return (
      <div id='default-template'>
        <NavigationMenu data={ businessData } thirdNamePass={this.relocater}/>
        <Map relocateMap={this.state.location} zoomMap={this.state.zoom} modifyLocation={this.moveMap.bind(this)} polygonData={ parkingData }/>

        { this.props.children }
      </div>
    )
  }

}
