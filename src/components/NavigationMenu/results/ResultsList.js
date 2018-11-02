import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Context } from '../../Provider'

export default class ResultsList extends Component {

  render() {
    return (
      <Context.Consumer>
        {context => (
          <List>
            {this.props.data.map((location) => (
              <ListItem button key={location.properties.name} name={location.properties.name} onClick={context.chooseBusiness.bind(this, location)}>
                <ListItemText primary={location.properties.name} secondary={location.properties["marker-symbol"]} />
              </ListItem>
            ))}
          </List>
          )
        }
      </Context.Consumer>
    )
  }
}