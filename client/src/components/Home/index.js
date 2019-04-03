import React from 'react';
import { Context } from '../Provider';
//material-ui
import { withStyles } from '@material-ui/core/styles';
//components
import Drawer from './Drawer';
import Map from './Map';
import NavigationMenu from './NavigationMenu';
import Container from './Container';

import EventSnackbar from './Events/EventSnackbar';

const styles = theme => ({
  mainContent: {
    position: 'relative',
  },
  footer: {
    position: 'fixed',
    'bottom': 0,
    right: 1,
    fontFamily: 'sans-serif',
    fontSize: '10px',
    fontWeight: '50'
  }
});



class Home extends React.Component {
  render () {
    const { classes } = this.props;

    return (
      <Context.Consumer>
        {context => (
            <div className={classes.mainContent} onClick={context.clearResultsAndCloseDrawer}>
              <EventSnackbar />
              <NavigationMenu />
              {context.state.selectedEvent && <EventTitle event={context.state.selectedEvent} />}
              <Container >
                <Drawer type={context.state.dataType} data={context.state.selectedItem ? context.state.selectedItem : null} />
                <Map />
              </Container>
            </div>
          )}
        </Context.Consumer>
      )
    }
  }

export default withStyles(styles)(Home);


function EventTitle({event}) {
 return(
   <div>{event.title}</div>
 )
}