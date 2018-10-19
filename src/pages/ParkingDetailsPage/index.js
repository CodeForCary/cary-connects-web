import React from "react";
import DefaultTemplate from "src/templates/DefaultTemplate";
import PageDirectory from "src/pages/PageDirectory";
import Link from "src/elements/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "src/components/Card";
import { Context } from "src/components/Provider";

const parking = {
  name: "Business Name Here"
};

export default class ParkingDetailsPage extends React.Component {
  render() {
    const { classes, data } = this.props;

    return (
      <DefaultTemplate>
        Parking Details Page for ID: {this.props.match.params.id}
        <Grid container justify="center">
          <Grid item>
            <Button variant="contained">
              <Link url={PageDirectory.BUSINESS_DETAILS_PAGE.path}>
                Business Details
              </Link>
            </Button>
          </Grid>
        </Grid>
        <Context.Consumer>
          {context => (
            <Card type="parking" data={context.state.selectedMapItem} />
          )}
        </Context.Consumer>
      </DefaultTemplate>
    );
  }
}
