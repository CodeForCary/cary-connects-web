import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Context } from "src/components/Provider";

import "./SearchInput.css";

const styles = theme => ({
  flex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  width: {
    width: "40%"
  },
  componentSearchInput: {
    color: "#FFF",
    borderRadius: "4px",
    padding: "10px 8px",
    border: "1px solid #fff",
    width: "100%",
    margin: "10px",
    [theme.breakpoints.down("sm")]: {
      "font-size": "14px"
    },
    "font-size": "18px"
  }
});

class SearchInput extends Component {
  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Context.Consumer>
          {context => (
            <div className={classes.flex}>
              <label className='visuallyhidden' htmlFor='mobile-search'>
                Where to?
              </label>
              <InputBase
                id='mobile-search'
                variant='outlined'
                placeholder='Where to?'
                autoComplete='off'
                autoFocus={true}
                value={context.state.searchValue}
                onChange={context.handleSearchChange}
                onClick={context.clearSearch}
                className={classnames(classes.componentSearchInput, classes.width)}
                endAdornment={<SearchIcon />}
              />
            </div>
          )}
        </Context.Consumer>
      </div>
    );
  }
}
SearchInput.propTypes = {
  textChange: PropTypes.func
};
export default withStyles(styles)(SearchInput);
