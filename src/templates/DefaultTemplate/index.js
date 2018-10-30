import React, { Component } from "react";
import NavigationMenu from "src/components/NavigationMenu";
import Map from "src/components/Map";
import flip from "geojson-flip";
import { withStyles } from "@material-ui/core/styles";
import Provider, { Context } from "../../components/Provider";
import MediaQuery from 'react-responsive';
import Grid from '@material-ui/core/Grid'
import Drawer from 'src/components/Drawer'
import classnames from 'classnames'

const drawerWidth = 240;

const styles = theme => ({
  bodyContainer: {
    'height': '100%',
    'display': 'flex',
    'alignItems': 'stretch'
  },
  content: {
    flexgrow: 1,
    padding: theme.spacing.unit * 3,
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

const MapContainer = props => (
  <React.Fragment>
      <Grid container className={props.classes} justify="center" alignItems="center">
        <Grid item xs={10}>
          <Map polygonData={props.parkingData} />
        </Grid>
      </Grid>
  </React.Fragment>
)

class DefaultTemplate extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { classes } = this.props;

    return (
      <Provider>
        <Context.Consumer>
          {context => (
            <div id="default-template" onClick={context.clearResults}>
              <NavigationMenu />

              <div className={classes.bodyContainer}>
                  <Drawer data={context.state.selectedMapItem ? context.state.selectedMapItem : null} />
                <MapContainer
                  classes={classnames(classes.content, {[classes.contentShift]: context.state.drawerOpen})}
                  parkingData={context.state.parkingData}
                />
              </div>
            </div>
          )}
        </Context.Consumer>
      </Provider>
    );
  }
}

export default withStyles(styles)(DefaultTemplate);
