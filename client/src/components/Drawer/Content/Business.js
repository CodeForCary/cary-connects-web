import React, { Component } from 'react';
import PolygonCenter from 'geojson-polygon-center';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import { dataList } from './dataList';

const styles = theme => ({

});

const openGoogleMaps = (coords) => {
  const center = PolygonCenter(coords)
  window.open(
    "https://www.google.com/maps/dir/?api=1&destination=" +
      center.coordinates[0] +
      "," +
      center.coordinates[1]
  )
}

class Business extends Component {
  render() {
    const business = this.props.data;
    const list = dataList(business);
    console.log(business)
    return (
      <div>
        <Typography variant="title">
          Business: <br /> {business.name}
        </Typography>
        <List>
          {list}
          <ListItem>
            <Button
              variant="outlined"
              onClick={() => (openGoogleMaps(this.props.coords))}
            >
              Directions
            </Button>
          </ListItem>
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(Business);
