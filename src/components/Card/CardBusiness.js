import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import BusinessIcon from '@material-ui/icons/StoreMallDirectory'
import PhoneIcon from '@material-ui/icons/Phone'
import LinkIcon from '@material-ui/icons/Link'


const styles = theme => ({
  cell: {
    border: 'none'
  }
});

const ListItemEl = props => {
  let icon;
  if(props.icon === 'BusinessIcon'){
    icon = <BusinessIcon />;
  }else if (props.icon === 'PhoneIcon') {
    icon = <PhoneIcon />;
  }else if (props.icon === 'WebsiteIcon') {
    icon = <LinkIcon />;
  }
  console.log(props.data)

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
  for(let key in data){
    let item;
    if(key === "address"){
      item = <ListItemEl icon="BusinessIcon" text={data[key]} key={id} />
    }else if(key === "phone") {
      item = <ListItemEl icon="PhoneIcon" text={data[key]} key={id} />
    }else if(key === "website") {
      item = <ListItemEl icon="WebsiteIcon" text={data[key]} key={id} />
    }
    arr.push(item);
    id++;
  }
  return arr;
}

const CardData = props => {
  const { data } = props;
  const list = generateList(data);

  return(
    <Grid container item xs={12} md={4}>
      <List dense>
        {list}
      </List>
    </Grid>
    
  )
}

export default withStyles(styles)(CardData);