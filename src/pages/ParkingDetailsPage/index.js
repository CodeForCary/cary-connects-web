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

const bodyContainer = {
  height: '100%'
};

export default class ParkingDetailsPage extends React.Component {
  render() {
    const { classes, data } = this.props;

    return (
      <DefaultTemplate style="bodyContainer">
        <Context.Consumer>
          {context => (
            <Card type="parking" data={context.state.selectedMapItem} />
          )}
        </Context.Consumer>
      </DefaultTemplate>
    );
  }
}
