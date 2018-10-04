import React, { Component } from 'react'
import NavigationItem from './NavigationItem'
import PageDirectory from 'src/pages/PageDirectory'

export default class NavigationMenu extends Component {
  render () {
    return (
      <div>
        <NavigationItem title='Home' navigatesTo={PageDirectory.WELCOME_PAGE.path} />
        <NavigationItem title='Feedback' navigatesTo={PageDirectory.FEEDBACK_PAGE.path} />
      </div>
    )
  }
}
