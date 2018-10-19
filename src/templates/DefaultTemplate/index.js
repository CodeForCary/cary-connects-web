import React, { Component } from "react";
import NavigationMenu from "src/components/NavigationMenu";
import Map from "src/components/Map";
import flip from "geojson-flip";
import { withStyles } from '@material-ui/core/styles';
import Provider, { Context } from "../../components/Provider";

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
    return (
      <Provider>
        <Context.Consumer>
          {context => (
            <div id="default-template">
              <NavigationMenu data={context.state.businessData} />
              <Map polygonData={context.state.parkingData} />
              {this.props.children}
            </div>
          )}
        </Context.Consumer>
      </Provider>
    );
  }
}

export default withStyles(styles)(DefaultTemplate)
