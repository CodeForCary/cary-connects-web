import React, { Component } from "react";
import SearchInput from "./SearchInput";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CaryConnectsIcon from "src/assets/CaryConnectIcon.png";
import { Context } from "src/components/Provider";
import Results from "./results";

import { withTheme } from "@material-ui/core/styles";

class NavigationMenu extends Component {
  render() {
    const { theme } = this.props;

    const styles = {
      root: {
        width: "100%",
        marginBottom: theme.spacing.unit * 3
      },
      grow: {
        flexGrow: "1"
      },
      icon: {
        height: "50px",
        marginRight: "5px"
      },
      brandText: {
        color: theme.palette.primary.contrastText
      },
      toolbar: theme.mixins.toolbar
    };

    return (
      <Context.Consumer>
        {context => (
          <div style={styles.root}>
            <AppBar position='static' onClick={context.handleDrawerClose}>
              <Toolbar>
                <img style={styles.icon} src={CaryConnectsIcon} alt='cary connects icon' />
                <Typography variant='h6' style={styles.brandText}>
                  Cary Connects
                </Typography>
                <div style={styles.grow} />
                <SearchInput />
              </Toolbar>
            </AppBar>
            <Results locationData={context.state.filteredLocation} />
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default withTheme()(NavigationMenu);
