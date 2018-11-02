import React, { Component } from "react";
import DefaultTemplate from "src/templates/DefaultTemplate";
import PageDirectory from "src/pages/PageDirectory";
import Link from "src/elements/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Context } from "../../components/Provider";

export default class BusinessDetailsPage extends Component {
  render() {
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
}
            </React.Fragment>
          )}
        </Context.Consumer>
      </DefaultTemplate>
    );
  }
}
