import React, { Component } from "react";
import PropTypes from "prop-types";
import "./LocationResultRow.css";

class LocationResultsRow extends Component {
  takeName(locationName, e) {
    this.props.passName(locationName);
  }

  render() {
    return (
      <div
        className="component-location-result-row"
        onClick={this.takeName.bind(this, this.props)}
        >
        <span className="name">{this.props.name}</span>
        <span className="amenity"> <strong> {this.props["marker-symbol"]}</strong></span>
      </div>
    );
  }
}
LocationResultsRow.propTypes = {
  name: PropTypes.string,
};
export default LocationResultsRow;
