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
        <span className="marker-symbol"> -<strong> {this.props["marker-symbol"]}</strong></span>
      </div>
    );
  }
}
LocationResultsRow.propTypes = {
  name: PropTypes.string,
};
export default LocationResultsRow;
