import React, { Component } from "react";
import NavigationMenu from "src/components/NavigationMenu";
import Map from "src/components/Map";
import flip from "geojson-flip";
import { withStyles } from '@material-ui/core/styles';
import Provider, { Context } from "../../components/Provider";
import MediaQuery from 'react-responsive';
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  mobileContainer: {
    'margin-top': '0rem'
  },
  computerContainer: {
    'margin-top': '2rem'
  }
})

class DefaultTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businessData: null,
      parkingData: null,
      location: {
        lat: 35.787317,
        lng: -78.781226
      },
      zoom: 15
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Provider>
        <Context.Consumer>
          {context => (
            <div id="default-template">
              <NavigationMenu />
              <MediaQuery query="(min-width: 700px)">
                <Grid container justify="center" alignItems="center" className={classes.computerContainer}>
                  <Grid item xs={12} md={8}>
                    <Map polygonData={context.state.parkingData} />
                    {this.props.children}
                  </Grid>
                </Grid>
              </MediaQuery>
              <MediaQuery query="(max-width: 700px)">
                <Grid container justify="center" alignItems="center" className={classes.mobileContainer}>
                  <Grid item xs={12} md={8}>
                    <Map polygonData={context.state.parkingData} />
                    {this.props.children}
                  </Grid>
                </Grid>
              </MediaQuery>
            </div>
          )}
        </Context.Consumer>
      </Provider>
    );
  }
}

export default withStyles(styles)(DefaultTemplate)
