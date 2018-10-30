import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LocalParkingIcon from '@material-ui/icons/LocalParking'
import AccessibleIcon from '@material-ui/icons/Accessible'
import BatteryIcon from '@material-ui/icons/BatteryChargingFull'

const styles = theme => ({
  cell: {
    border: 'none'
  }
});

const ListItemEl = props => {
  let icon;
  switch (props.icon) {
    case 'parking':
    icon = <LocalParkingIcon />
    break;
    case 'handicap':
    icon = <AccessibleIcon />
    break;
    case 'electric':
    icon = <BatteryIcon />
  }

  return (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary = {`Standard Spaces: ${props.text}`}/>
      </ListItem>
    </React.Fragment>
  )
}

const generateList = data => {
  const arr = [];
  let id = 0;
  for (let key in data) {
    let item;
    switch (key) {
      case 'stdParking':
      item = <ListItemEl icon='parking' text={data.stdParking} />
      break;
    }

    arr.push(item)
  }
  return arr
}


const CardData = props => {
  const { classes, data } = props;
  const listItems = generateList(data);
  return(
    <Grid container item xs={12} md={4}>
      <List>
        {listItems}
      </List>
    </Grid>

  )
}

export default withStyles(styles)(CardData);
