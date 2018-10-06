import React, { Component } from "react";
import PropTypes from "prop-types";
import "./LocationResultRow.css";

class LocationResultsRow extends Component {
  render() {
    return (
      <div
        className="component-location-result-row"
        >
        <span className="name">{this.props.name}</span>
        <span className="amenity"> -<strong> {this.props.amenity}</strong></span>
      </div>
    );
  }
}
LocationResultsRow.propTypes = {
  name: PropTypes.string,
};
export default LocationResultsRow;
