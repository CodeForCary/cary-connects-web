import React, { Component } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

class SearchInput extends Component {
  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
SearchInput.propTypes = {
  textChange: PropTypes.func
};
export default SearchInput;
