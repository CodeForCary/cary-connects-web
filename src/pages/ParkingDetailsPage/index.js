import React from "react";
import DefaultTemplate from "src/templates/DefaultTemplate";
import { withStyles } from '@material-ui/core/styles'
import { Context } from "src/components/Provider";

const styles = theme => ({
  // bodyContainer : {
  //   height: '100%',
  //   display: 'flex'
  // },
  // content: {
  //   flexgrow: 1,
  //   padding: theme.spacing.unit * 3,
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transition.easing.sharp,
  //     duration: theme.transition.duration.leavingScreen
  //   }),
  //   marginLeft: -drawerWidth
  // },
  // contentShift: {
  //   transition: theme.transition.create('margin', {
  //     easing: theme.transition.easing.easeOut,
  //     duration: theme.transition.duration.leavingScreen
  //   }),
  //   marginLeft: 0
  // }
})

class ParkingDetailsPage extends React.Component {
  render() {
    const { classes } = this.props;
    

    return (
      <DefaultTemplate style={classes.bodyContainer}>
        <Context.Consumer>
          {/* {context => (
            <Drawer data={context.state.selectedMapItem} />
          )} */}
        </Context.Consumer>
      </DefaultTemplate>
    );
  }
}

export default withStyles(styles)(ParkingDetailsPage)
