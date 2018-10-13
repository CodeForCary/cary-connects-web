import React from 'react'
import DefaultTemplate from 'src/templates/DefaultTemplate'
import Card from 'src/components/Card'
import PageDirectory from 'src/pages/PageDirectory'
import Link from 'src/elements/Link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const business = [{
  name: 'Enter Business Title Here',
  address: '123 Oakwood Dr',
  phone: '(555)555-5555',
  website: 'www.website.com',
  info1: 'something here',
  info2: 'something else here'
},
{
  name: 'Another Business',
  address: '456 blueLake St'
}]

const generateCards = (data) => {
  let arr = [];
  data.forEach((val, i) => {
    const item = <Card type='business' data={val} id={i} />
    arr.push(item)
  })
  return arr;
}



export default class BusinessDetailsPage extends React.Component {
  
  render () {
    const cards = generateCards(business);
    return (
      <DefaultTemplate>
        Business Details Page for ID: { this.props.match.params.id }
        <Grid container justify="center">
          <Grid item>
            <Button variant="contained">
              <Link url={PageDirectory.PARKING_DETAILS_PAGE.path}>
                Parking Details
              </Link>
            </Button>
          </Grid>
        </Grid>
        {cards}
      </DefaultTemplate>
    )
  }
}
