import React from "react";
import Routes from "./Routes/Routes";
import { withStyles } from "@material-ui/core/styles";

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
        <div className={classes.footer}>&#169; 2019 Cary Connects v1.0</div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
