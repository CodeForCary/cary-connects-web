import React, { Component } from "react";
import PropTypes from "prop-types";

import LocationResultRow from "./LocationResultRow";

class LocationResults extends Component {
  showName(name) {
    this.props.secondPassName(name);
  }

  render() {
    return (
      <div className="component-location-results">
        {this.props.locationData.map(locationData => (
          <LocationResultRow
            name={locationData.properties.name}
            amenity={locationData.properties["marker-symbol"]}
            passName={this.showName.bind(this)}
            key={locationData.properties.name}
          />
        ))}
      </div>
    );
  }
}
LocationResults.propTypes = {
  locationData: PropTypes.array
};
export default LocationResults;
