import React, { Component } from 'react'
import PolygonCenter from 'geojson-polygon-center';

import { dataList } from './dataList';

//Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

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


class Parking extends Component {

  render() {
    const lot = this.props.data;
    const list = dataList(lot);
    console.log(list)
    return (
      <div>
        <Typography variant="title">
          Parking: <br />{lot.name}
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
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Parking);


