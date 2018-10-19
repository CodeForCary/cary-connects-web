import React, { Component } from "react";
import PropTypes from "prop-types";
import { Context } from "../Provider";
import "./LocationResultRow.css";

class LocationResultsRow extends Component {
  onClick() {

  }

  render() {
    return (
      <Context.Consumer>
        {(context) => (
          <div
            className="component-location-result-row"
            // onClick={this.takeName.bind(this, this.props)}
            onClick={context.clicker.bind(this, this.props)}
          >
            <span className="name">{this.props.name}</span>
            <span className="amenity"> <strong> {this.props["marker-symbol"]}</strong></span>
          </div>
        )}
      </Context.Consumer>
    );
  }
}
LocationResultsRow.propTypes = {
  name: PropTypes.string,
};
export default LocationResultsRow;
