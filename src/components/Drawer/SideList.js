import React from 'react'
import { withStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccessibleIcon from '@material-ui/icons/Accessible'
import ParkingIcon from '@material-ui/icons/LocalParking'
import RestrictionsIcon from '@material-ui/icons/NotInterested'
import Typography from '@material-ui/core/Typography'
import CommuteIcon from '@material-ui/icons/Commute'
import PolygonCenter from 'geojson-polygon-center'

const styles = theme => ({

});


const ListItemEl = props => {
  let icon;
  switch (props.icon) {
    case 'accessible':
      icon = <AccessibleIcon />
      break;
    case 'parking':
      icon = <ParkingIcon />
      break;
    case 'restrictions':
      icon = <RestrictionsIcon />
      break;
    case 'directions':
      icon = <CommuteIcon />
  }

  return (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItem>
    </React.Fragment>
  )
}

const generateList = props => {
  const arr = [];
  let id = 0;

  for(let key in props.data[0].properties) {
    let item;
    let text;
    if(props.data[0].properties[key] === -1) {
      text = 'None'
    } else {
      text= props.data[0].properties[key]
    }
    switch (key) {
      case 'hcParking':
        item = <ListItemEl
          icon='accessible'
          text={`Accessible: ${text}`}
          key={id}
        />
        break;
      case 'stdParking':
        item = <ListItemEl
          icon='parking'
          text={`Standard: ${text}`}
          id={id}
        />
        break;
      case 'restrictions':
        item = <ListItemEl
          icon= 'restrictions'
          text={`Restrictions: ${text}`}
        />
    }
    arr.push(item);
  }

  for(let key in props.data[0]) {
    let item;
    let coords;
    if(props.data[0][key] === -1) {
      coords = ''
    } else {
      coords= props.data[0][key]
    }
    switch (key) {
      case 'geometry':
        const openGoogleMaps = (coords) => {
          const center = PolygonCenter(coords)
          window.open(
            "https://www.google.com/maps/dir/?api=1&destination=" +
              center.coordinates[0] +
              "," +
              center.coordinates[1]
          )
        }
        item = <ListItemEl
          icon='directions'
          text={'Directions'}
          onClick={openGoogleMaps(coords)}
        />
    }
  arr.push(item)
  }

  id++;
  return arr;
}


const SideList = props => {
  const listItems = generateList(props)

  return (
    <List>
      {listItems}
    </List>
  )
}


export default withStyles(styles)(SideList)
