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



const CardData = props => {
  const { classes } = props;
  return(
    <Grid container item xs={12} md={4}>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="123 Oakwood Dr." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary="(555)555-5555" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LinkIcon />
          </ListItemIcon>
          <ListItemText primary="www.website.com" />
        </ListItem>
      </List>
    </Grid>
    
  )
}

export default withStyles(styles)(CardData);