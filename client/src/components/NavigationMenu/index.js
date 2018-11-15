import React, { Component } from 'react'
import SearchInput from './SearchInput'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CaryConnectsIcon from './../../assets/CaryConnectIcon.png'
import { Context } from "../../components/Provider";
import Results from './results'

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing.unit * 3
  },
  grow: {
    flexGrow: '1'
  },
  icon: {
    height: '50px',
    marginRight: '5px'
  },
  brandText: {
    color: '#fff'
  },
  toolbar: theme.mixins.toolbar
})


class NavigationMenu extends Component {

  render () {
    const { classes } = this.props;

    return (
      <Context.Consumer>
      {context => (
      <div className={classes.root} >
      <AppBar position="static" onClick={context.handleDrawerClose}>
        <Toolbar>
            <img className={classes.icon} src={CaryConnectsIcon} alt='cary connects icon' />
            <Typography variant="title" className={classes.brandText}>
              Cary Connects
            </Typography>
          <div className={classes.grow} />
          <SearchInput textChange={context.handleSearchChange} />
        </Toolbar>
      </AppBar>
      <Results locationData={context.state.filteredLocation} />
      </div>
      )}
      </Context.Consumer>
    )
  }
}

export default withStyles(styles)(NavigationMenu);
