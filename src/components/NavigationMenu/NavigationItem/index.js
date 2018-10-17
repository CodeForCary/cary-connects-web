import React, { Component } from 'react'
import Link from 'src/elements/Link'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


export default class NavigationItem extends Component {
  render () {
    return (
        <Button >
          <Link url={this.props.navigatesTo}>
            { this.props.title }
          </Link>
        </Button>
    )
  }
}
