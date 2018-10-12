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
      Parking Data
    </Grid>
    
  )
}

export default withStyles(styles)(CardData);