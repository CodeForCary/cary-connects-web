import React, { Component } from "react";
import { withTheme } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Context } from "src/components/Provider";

import "./SearchInput.css";

class SearchInput extends Component {
  render() {
    const { theme } = this.props;

    const styles = {
      flex: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
      },
      componentSearchInput: {
        color: theme.palette.primary.contrastText,
        borderRadius: "4px",
        padding: "10px 8px",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        width: "100%",
        margin: "10px",
        fontSize: "18px"
      }
    };

    return (
      <div>
        <Context.Consumer>
          {context => (
            <div style={styles.flex}>
              <label className='visuallyhidden' htmlFor='search'>
                Where to?
              </label>
              <InputBase
                id='search'
                data-testid='search'
                variant='outlined'
                placeholder='Where to?'
                autoComplete='off'
                autoFocus={true}
                value={context.state.searchValue}
                onChange={context.handleSearchChange}
                onClick={context.clearSearch}
                style={styles.componentSearchInput}
                endAdornment={<SearchIcon />}
              />
            </div>
          )}
        </Context.Consumer>
      </div>
    );
  }
}

export default withTheme()(SearchInput);
