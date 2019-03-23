import React from 'react';
import { Context } from '../../Provider';
import { withStyles } from '@material-ui/core/styles';
import NavigationMenu from '../NavigationMenu';
import Container from '../Container';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  mainContent: {
    position: 'relative',
  },
});

class EventPage extends React.Component {
  render () {
    const { classes, match } = this.props;
    console.log(match.params)
    return (
      <Context.Consumer>
        {context => {
        const { events } = context.state;
        const matchedEvent = events.filter((event) => {
          return event.slug === match.params.slug;
        });

        console.log(matchedEvent)
        if(matchedEvent.length === 0) return <div><h1>No matching event</h1></div>
        
        return (
            <div className={classes.mainContent} onClick={context.clearResultsAndCloseDrawer}>
              <NavigationMenu />
              <Container>
                <div className={classes.root}>
                <Grid container>
                  <Grid item xs={12}>
                  <Paper className={classes.paper}>                  
                    <Typography variant='h3'>{matchedEvent[0].title}</Typography>
                    <Typography variant='subtitle1'>{matchedEvent[0].description}</Typography>
                  </Paper>
                  </Grid>
                </Grid>
                </div>
              </Container>
            </div>
          )}}
        </Context.Consumer>
      )
    }
  }

export default withStyles(styles)(EventPage);