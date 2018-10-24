import React from 'react'
import DefaultTemplate from 'src/templates/DefaultTemplate'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import PageDirectory from 'src//pages/PageDirectory'
import Link from 'src/elements/Link'

export default class WelcomePage extends React.Component {

  render () {
    return (
      <DefaultTemplate>
        <Grid container justify="center">
          <Grid item>
            <Button variant="contained">
              <Link url={PageDirectory.PARKING_DETAILS_PAGE.path}>
                Parking Details
              </Link>
            </Button>
          </Grid>
        </Grid>
      </DefaultTemplate>
    )
  }
}
