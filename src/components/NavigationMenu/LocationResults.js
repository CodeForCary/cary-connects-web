import React, { Component } from "react";
import PropTypes from "prop-types";
import capitalize from "capitalize";

import LocationResultRow from "./LocationResultRow";

class LocationResults extends Component {

  render() {
    return (
      <div className="component-location-results">
        {this.props.locationData.map(locationData => (
          <LocationResultRow
            name={locationData.properties.name}
            marker-symbol={capitalize(locationData.properties["marker-symbol"])}
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
