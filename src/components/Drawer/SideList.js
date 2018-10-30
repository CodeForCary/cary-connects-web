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

const generateList = data => {
  const arr = [];
  let id = 0;

  for(let key in data) {
    let item;
    let text;
    if(data[key] === -1) {
      text = 'None'
    } else {
      text= data[key]
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
  id++;
  return arr;
}


const SideList = props => {
  const listItems = generateList(props.data[0].properties)
  
  return (
    <List>
      {listItems}
    </List>
  )
}


export default withStyles(styles)(SideList)