import React, { Component } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

class SearchInput extends Component {
  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    const flex = {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end'
    }
    const width = {
      width: '33%',
  };
    return (
      <div className="component-search-input">
        <div style={flex}>
          <input onChange={this.handleChange} style={width}/>
        </div>
      </div>
    );
  }
}
SearchInput.propTypes = {
  textChange: PropTypes.func
};
export default SearchInput;
