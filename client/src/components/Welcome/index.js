import React, { Component } from "react";
import { Redirect } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import FadeIn from "react-fade-in";

const styles = theme => ({
  root: {
    textAlign: "center",
    backgroundColor: "#0190BE",
    height: "100%",
    width: "100%",
    position: "absolute"
  },
  title: {
    paddingTop: "10%",
    fontFamily: "sans-serif",
    fontWeight: "100",
    fontSize: "6vh",
    color: "white"
  },
  subtitle: {
    fontSize: "4vh",
    color: "white"
  },
  anchor: {
    color: "white"
  },
  verticalCenter: {
    transform: "translateY(-50%)"
  },
  wrapper: {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    height: "100vh"
  }
});

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  _handleClick = () => {
    this.setState({ redirect: true });
  };

  componentDidMount() {
    window.addEventListener("click", this._handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this._handleClick);
  }

  render() {
    const { classes } = this.props;

    if (this.state.redirect) {
      return <Redirect push to="/home" />;
    }

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <FadeIn transitionDuration={5000} className={classes.verticalCenter}>
            <h1 className={classes.title}>
              Welcome to our Cary Downtown Parking site!
            </h1>
            <div className={classes.subtitle}>
              <center>
                <a
                  className={classes.anchor}
                  href="http://codeforcary.org/parking"
                >
                  <font>About</font>
                </a>
              </center>
              <center>
                <font>The first app for our Cary Connects platform</font>
              </center>
              <center>
                <font>Created by Volunteers</font>
              </center>
              <center>
                <font>with the </font>
                <a
                  className={classes.anchor}
                  href="https://www.heartofcary.org/caryapp.html"
                >
                  Heart of Cary
                </a>
              </center>
              <center>
                <font>and</font>
              </center>
              <center>
                <font />
                <a
                  className={classes.anchor}
                  href="http://codeforcary.org/parking/"
                >
                  <font>Code for Cary</font>
                </a>
              </center>
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Welcome);
