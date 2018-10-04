import React from 'react'
import DefaultTemplate from 'src/templates/DefaultTemplate'

export default class ParkingDetailsPage extends React.Component {

  render () {
    return (
      <DefaultTemplate>
        Parking Details Page for ID: { this.props.match.params.id }
      </DefaultTemplate>
    )
  }
}
