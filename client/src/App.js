import React from "react";
import Routes from "./Routes/Routes";
import { withStyles } from "@material-ui/core/styles";
import version from "../package.json";

const styles = theme => ({
  footer: {
    position: "fixed",
    bottom: 0,
    right: 1,
    fontFamily: "sans-serif",
    fontSize: "10px",
    fontWeight: "50"
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Routes />
        <div className={classes.footer}>&#169; 2019 Cary Connects {version.version}</div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
