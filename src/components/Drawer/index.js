import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { Context } from "src/components/Provider";
import SideList from './SideList'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import PolygonCenter from 'geojson-polygon-center'


const drawerWidth = 240

const styles = theme => ({
  root: {
    height: '100%'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: '100%',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    padding: '24px 0'
  },
  header: {
    margin: '0 10px'
  }
});

class index extends Component {



  render() {
    const { classes } = this.props;

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
                <div className={classes.header} onClick={context.handleDrawerClose}>
                  <Grid container justify='space-between'>
                    <Grid item>
                      <Typography variant='title'>
                        {context.state.drawerOpen ? context.state.selectedMapItem[0].properties.name: null}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <ChevronLeftIcon className={classes.icon}/>
                    </Grid>
                  </Grid>
                </div>

              {context.state.drawerOpen ? <SideList data={this.props.data} directions={context.openGoogleMaps}/> : null}

            </Drawer>
          )}

        </Context.Consumer>
      </div>
    )
  }
}

export default withStyles(styles)(index);
