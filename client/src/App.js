import React from 'react';
import { Context } from './components/Provider';
import classnames from 'classnames';
import Feedback from './components/Feedback';
//material-ui
import { withStyles } from '@material-ui/core/styles';
//components
import Drawer from 'src/components/Drawer';
import Map from 'src/components/Map';
import NavigationMenu from './components/NavigationMenu';
import Container from './components/Container';

const styles = theme => ({
  root: {
    position: 'relative'
  }
});

class App extends React.Component {
  render () {
    const { classes } = this.props;


    return (
      <Context.Consumer>
        {context => (
          <div className={classes.root} onClick={context.clearResults}>
            <NavigationMenu />
            <Container>
              <Drawer data={context.state.selectedMapItem ? context.state.selectedMapItem : null} />
              <Map />
            </Container>
            <Feedback />
          </div>
        )}
      </Context.Consumer>
    )
  }
}

export default withStyles(styles)(App);
