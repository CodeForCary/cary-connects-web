import React, { Component } from "react";
import DefaultTemplate from "src/templates/DefaultTemplate";
import Card from "src/components/Card";
import PageDirectory from "src/pages/PageDirectory";
import Link from "src/elements/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Context } from "../../components/Provider";

const businesses = [
  {
    name: "Enter Business Title Here",
    address: "123 Oakwood Dr",
    phone: "(555)555-5555",
    website: "www.website.com",
    info1: "something here",
    info2: "something else here"
  },
  {
    name: "Another Business",
    address: "456 blueLake St"
  }
];

const generateCards = businesses => {
  return businesses.map(business => {
    return <Card type="business" data={business} key={business.name} />;
  });
};

export default class BusinessDetailsPage extends Component {
  render() {
    const cards = generateCards(businesses);
    return (
      <DefaultTemplate>
        Business Details Page for ID: {this.props.match.params.id}
        <Context.Consumer>
          {context => (
            <React.Fragment>
              <Grid container justify="center">
                <Grid item>
                  <Button variant="contained">
                    <Link url={PageDirectory.PARKING_DETAILS_PAGE.path}>
                      Parking Details
                    </Link>
                  </Button>
                </Grid>
              </Grid>
              {console.log(context.state.selectedMapItem)}
            </React.Fragment>
          )}
        </Context.Consumer>
      </DefaultTemplate>
    );
  }
}
