import React from 'react';
import classnames from 'classnames';
import { Context } from './../Provider';

//material-ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

//components
import Map from './Map';

const drawerWidth = 240;

const styles = theme => ({
  content: {
    flexgrow: 1,
    padding: theme.spacing.unit * 3,
    'padding-bottom': '1px',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0
  }
});

class MapComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return(
        <Context.Consumer>
          {context => (
            <Grid container className={classnames(classes.content, {[classes.contentShift]: context.state.drawerOpen})} justify="center" alignItems="center">
              <Grid item xs={10}>
                <Map polygonData={context.state.parkingData} />
              </Grid>
            </Grid>
          )}
        </Context.Consumer>
    )
  }
}

export default withStyles(styles)(MapComponent);
