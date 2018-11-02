import React, { Component } from 'react'
import Link from 'src/elements/Link'


export default class NavigationItem extends Component {
  render () {
    return (
      <Link url={this.props.navigatesTo}>
        { this.props.children }
      </Link>
    )
  }
}
