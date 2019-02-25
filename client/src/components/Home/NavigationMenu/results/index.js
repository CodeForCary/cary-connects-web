import React, { Component } from "react";
import Popover from "@material-ui/core/Popover";
import { Context } from "src/components/Provider";
import ResultsList from "./ResultsList";

class index extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => {
          const anchorEl = context.state.searchResultsAnchorEl;
          const open = Boolean(anchorEl);

          return (
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={context.clearSearch}
              disableAutoFocus={true}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <ResultsList />
            </Popover>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default index;
