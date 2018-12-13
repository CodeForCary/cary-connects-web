import React from 'react';
import { Context } from '../Provider';
import classnames from 'classnames';
//material-ui
import { withStyles } from '@material-ui/core/styles';
//components
import Drawer from './Drawer';
import Map from './Map';
import NavigationMenu from './NavigationMenu';
import Container from './Container';

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
              <NavigationMenu />
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
