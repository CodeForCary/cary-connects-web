import React, { Component } from "react";
import './LocationResults.css';
import PropTypes from "prop-types";
import LocationResultRow from "./LocationResultRow";

class LocationResults extends Component {
  render() {
    return (
      <div className="component-location">
      <div className="component-location-results">
        {this.props.locationData.map(locationData => (
          <div className="component-location-results-result">
          <LocationResultRow
            name={locationData.properties.name}
            amenity={locationData.properties["marker-symbol"]}
            key={locationData.properties.name}
          />
          </div>
        ))}
        </div>
      </div>
    );
  }
}
LocationResults.propTypes = {
  locationData: PropTypes.array
};
export default LocationResults;
