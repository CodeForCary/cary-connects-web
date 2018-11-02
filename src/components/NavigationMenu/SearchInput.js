import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Context } from "../Provider";
import MediaQuery from "react-responsive";

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
  componentSearchInputComputer: {
    color: "#FFF",
    borderRadius: "4px",
    padding: "10px 8px",
    border: "1px solid #fff",
    width: "100%",
    margin: "10px",
    "font-size": "18px"
  },
  componentSearchInputMobile: {
    color: "#FFF",
    borderRadius: "4px",
    padding: "10px 8px",
    border: "1px solid #fff",
    width: "100%",
    margin: "10px",
    "font-size": "11px"
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
              <MediaQuery query="(max-width: 700px)">
                <label className="visuallyhidden" htmlFor="mobile-search">
                  Where to?
                </label>
                <InputBase
                  id="mobile-search"
                  tabIndex="1"
                  variant="outlined"
                  placeholder="Where to?"
                  value={context.state.searchValue}
                  onChange={this.handleChange}
                  onClick={context.clearSearch}
                  className={classnames(
                    classes.componentSearchInputMobile,
                    classes.width
                  )}
                  endAdornment={<SearchIcon />}
                />
              </MediaQuery>
              <MediaQuery query="(min-width: 700px)">
                <label className="visuallyhidden" htmlFor="desktop-search">
                  Where to?
                </label>
                <InputBase
                  id="desktop-search"
                  tabIndex="1"
                  variant="outlined"
                  placeholder="Where to?"
                  value={context.state.searchValue}
                  autoFocus={true}
                  onChange={context.handleSearchChange}
                  onClick={context.clearSearch}
                  className={classnames(
                    classes.componentSearchInputComputer,
                    classes.width
                  )}
                  endAdornment={<SearchIcon />}
                />
              </MediaQuery>
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
