import React, { Component } from 'react';
import axios from 'axios';

class Data extends Component {

  state = {
      locations: []
    }

    componentDidMount() {
      axios.get(`http://codeforcary.org/parking/business.geojson`)
        .then(res => {
          const locations = JSON.parse(res.data);
          console.log(res.data);
          this.setState({ locations });
        })
    }

    render() {
      return (
          this.state.locations
      )
    }
}

export default Data;
