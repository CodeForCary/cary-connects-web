import React, { Component } from 'react'
import NavigationMenu from 'src/components/NavigationMenu'
import Map from 'src/components/Map'

export default class DefaultTemplate extends Component {
  render () {
    return (
      <div id='default-template'>
        <NavigationMenu />
        <Map />

        { this.props.children }
      </div>
    )
  }
}
