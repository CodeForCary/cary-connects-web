import React, { Component } from 'react'

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
  console.log(coords)
  window.open(
    "https://www.google.com/maps/dir/?api=1&destination=" +
      coords[1] +
      "," +
      coords[0].substring(0, coords[0].length - 1)
  )
}


class Parking extends Component {

  render() {
    const lot = this.props.data;
    const list = dataList(lot);
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
