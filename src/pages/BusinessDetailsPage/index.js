import React from 'react'
import DefaultTemplate from 'src/templates/DefaultTemplate'

export default class BusinessDetailsPage extends React.Component {

  render () {
    return (
      <DefaultTemplate>
        Business Details Page for ID: { this.props.match.params.id }
      </DefaultTemplate>
    )
  }
}
