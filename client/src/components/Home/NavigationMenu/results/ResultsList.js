import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import axios from "axios";
import ListItemText from "@material-ui/core/ListItemText";
import { Context } from "src/components/Provider";
import capitalize from "capitalize";

export default class ResultsList extends Component {
  handleSubmit(name) {
    axios.post("/api/updateData", { name: name });
  }

  render() {
    return (
      <Context.Consumer>
        {context => {
          const { filteredLocation } = context.state;
          return (
            <List>
              {filteredLocation.map(location => (
                <ListItem
                  data-testid='search-result'
                  button
                  key={location.properties.name}
                  name={location.properties.name}
                  onClick={event => {
                    context.chooseBusiness(location);
                    this.handleSubmit(location.properties.name);
                  }}
                >
                  <ListItemText
                    primary={location.properties.name}
                    secondary={capitalize(location.properties["marker-symbol"])}
                  />
                </ListItem>
              ))}
            </List>
          );
        }}
      </Context.Consumer>
    );
  }
}
