import React, { Component } from 'react'
import NavigationMenu from 'src/components/NavigationMenu'
import Map from 'src/components/Map'

export default class DefaultTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/CodeForCary/cary-connects-data/master/business.geojson')
      .then(response => response.json())
      .then(rawJSON => rawJSON.features)
      .then(data => this.setState({ data }));
  }

  render () {
    const { data } = this.state;

    return (
      <div id='default-template'>
        <NavigationMenu data={ data }/>
        <Map />

        { this.props.children }
      </div>
    )
  }
}
