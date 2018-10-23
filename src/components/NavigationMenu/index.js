import React, { Component } from 'react'
import NavigationItem from './NavigationItem'
import PageDirectory from 'src/pages/PageDirectory'
import SearchInput from './SearchInput'
import filterLocation from './filterLocation'
import LocationResults from './LocationResults'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import CaryConnectsIcon from './../../assets/CaryConnectIcon.png'
import Provider, { Context } from "../../components/Provider";

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%'
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
  }
})

class NavigationMenu extends Component {

  render () {
    const { classes } = this.props;

    return (
      <Context.Consumer>
      {context => (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavigationItem navigatesTo={PageDirectory.WELCOME_PAGE.path}>
            <img className={classes.icon} src={CaryConnectsIcon} alt='cary connects icon' />
          </NavigationItem>

            <Typography variant="title" className={classes.brandText}>
              Cary Connects
            </Typography>

          <div className={classes.grow} />
          <SearchInput textChange={context.handleSearchChange} />
        </Toolbar>
      </AppBar>
      <LocationResults className={classes.overlap} locationData={context.state.filteredLocation}/>
      </div>
      )}
      </Context.Consumer>
    )
  }
}

export default withStyles(styles)(NavigationMenu);
