import React, { Component } from "react";
import PropTypes from "prop-types";

import LocationResultRow from "./LocationResultRow";

class LocationResults extends Component {

  render() {
    return (
      <div className="component-location-results">
        {this.props.locationData.map(locationData => (
          <LocationResultRow
            name={locationData.properties.name}
            amenity={locationData.properties["marker-symbol"]}
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
