import React, { Component } from 'react'
import Link from 'src/elements/Link'

export default class NavigationItem extends Component {
  render () {
    return (
      <div>
        <Link url={this.props.navigatesTo}>
          { this.props.title }
        </Link>
      </div>
    )
  }
}
