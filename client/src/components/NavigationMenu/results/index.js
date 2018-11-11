import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import Popover from '@material-ui/core/Popover'
import { Context } from "src/components/Provider";
import ResultsList from './ResultsList';

const styles = theme => ({

});

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
                vertical: 'bottom',
                horizontal: 'left'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}
            >
              <ResultsList data={context.state.filteredLocation} />
            </Popover>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withStyles(styles)(index);
