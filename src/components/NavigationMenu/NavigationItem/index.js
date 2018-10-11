import React, { Component } from 'react'
import Link from 'src/elements/Link'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


export default class NavigationItem extends Component {
  render () {
    return (
      <Grid item xs={1}>
        <Link url={this.props.navigatesTo}>
          <Button variant="contained">
            { this.props.title }
          </Button>
        </Link>
      </Grid>
    )
  }
}
