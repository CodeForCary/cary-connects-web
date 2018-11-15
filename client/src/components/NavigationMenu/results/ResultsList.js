import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import axios from 'axios';
import ListItemText from "@material-ui/core/ListItemText";
import { Context } from "../../Provider";
import capitalize from "capitalize";

export default class ResultsList extends Component {

  handleSubmit(name) {
    console.log(name)
    axios.post("/api/updateData", {name: name})
  };

  render() {
    return (
      <Context.Consumer>
        {context => (
          <List>
            {this.props.data.map(location => (
              <ListItem
                button
                key={location.properties.name}
                name={location.properties.name}
                onClick={event => {
                  context.chooseBusiness(location); this.handleSubmit(location.properties.name)
                }}
              >
                <ListItemText
                  primary={location.properties.name}
                  secondary={capitalize(location.properties["marker-symbol"])}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Context.Consumer>
    );
  }
}
