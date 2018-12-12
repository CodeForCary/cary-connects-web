import React, { Component } from 'react'
import { Context } from "src/components/Provider";


import { withStyles } from '@material-ui/core/styles'

import Drawer from '@material-ui/core/Drawer'

import { Business, Parking } from './Content';


const drawerWidth = 340;

const styles = theme => ({
  root: {
    height: '100%',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: '100%',
  },
  drawerPaper: {
    position: 'relative',
    paddingLeft: theme.spacing.unit * 2, 
    width: drawerWidth,
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    padding: '24px 0'
  },
  header: {
    margin: '0 10px'
  }
});

const cursor = {
  cursor: 'pointer'
};

const getContent = (type, data) => {
  if(type === 'parking') {
    return <Parking data={data[0].properties} coords={data[0].properties.entrance1.split(" ")} />
  }else if(type === 'business') {
    return <Business data={data.properties} coords={data.geometry.coordinates} />
  }
}

class index extends Component {

  render() {
    const { classes, data, type } = this.props;

    return (
      <div>
        <Context.Consumer>
          {context => (
            <Drawer
              variant='persistent'
              anchor='left'
              open={context.state.drawerOpen}
              className={classes.root}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {context.state.drawerOpen ? getContent(type, data) : null}
            </Drawer>
          )}

        </Context.Consumer>
      </div>
    )
  }
}

export default withStyles(styles)(index);
