import React, { Component } from "react";
import PropTypes from "prop-types";
import { Context } from "../Provider";
import "./LocationResultRow.css";

class LocationResultsRow extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div
            className="component-location-result-row"
            onClick={context.chooseBusiness.bind(this, this.props)}
          >
            <span className="name">{this.props.name}</span>
            <span className="amenity">
              {" "}
              <strong> {this.props["marker-symbol"]}</strong>
            </span>
          </div>
        )}
      </Context.Consumer>
    );
  }
}
LocationResultsRow.propTypes = {
  name: PropTypes.string
};
export default LocationResultsRow;
