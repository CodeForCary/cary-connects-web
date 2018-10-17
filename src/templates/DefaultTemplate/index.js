import React, { Component } from 'react'
import NavigationMenu from 'src/components/NavigationMenu'
import Map from 'src/components/Map'

export default class DefaultTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      location: {
        lat: 35.787317,
    		lng: -78.781226
      },
      zoom: 15
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/CodeForCary/cary-connects-data/master/business.geojson')
      .then(response => response.json())
      .then(rawJSON => rawJSON.features)
      .then(data => this.setState({ data: data }));
  }

  relocater = (property) => {
    let feature = this.state.data
      .find(feature => feature.properties.name === property.name);
    this.setState({
      location: {
        lat: feature.geometry.coordinates[1],
        lng: feature.geometry.coordinates[0]
      },
      zoom: 19
    });
  };

  moveMap(location, zoom) {
    this.setState({
      location: location,
      zoom: zoom
    });
  }


  render () {
    const { data } = this.state;

    return (
      <div id='default-template'>
        <NavigationMenu data={ data } thirdNamePass={this.relocater}/>
        <Map relocateMap={this.state.location} zoomMap={this.state.zoom} modifyLocation={this.moveMap.bind(this)}/>

        { this.props.children }
      </div>
    )
  }
}
