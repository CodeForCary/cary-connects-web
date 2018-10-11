import React from 'react'

import './styles.scss'

export default class DefaultTemplate extends React.Component {

  render () {
    return (
      <div id='default-template'>
        { this.props.children }
      </div>
    )
  }
}
