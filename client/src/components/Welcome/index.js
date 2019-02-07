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
    paddingTop: "23%",
    fontFamily: "sans-serif",
    fontWeight: "100",
    fontSize: "72px",
    color: "white"
  }
});

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  _handleClick = (event) => {
    if (!event.target.matches('.aboutButton, .cfcButton, .hocButton')) {
      this.setState({ redirect: true });
    }
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
      return <Redirect push to='/home' />;
    }
    return (
      <div className={classes.root} >
        <FadeIn transitionDuration={5000}>
          <h1 className={classes.title}>Welcome to our Cary Downtown Parking site!</h1>
          <center><font class="aboutButton" face="sans-serif" size="4" color="white"></font><a href="http://codeforcary.org/parking"><font class="aboutButton" face="sans-serif" size="4" color="#D0D3D4">Click here for more info</font></a></center>
          <center className={classes.subtitle}><font face="sans-serif" size="10" color="white">The first app for our Cary Connects platform</font></center>
          <center><font face="sans-serif" size="4" color="white">Created by Volunteers</font></center>
          <center><font face="sans-serif" size="4" color="white">with the </font><a href="https://www.heartofcary.org/caryapp.html"><font class="hocButton" face="sans-serif" size="4" color="#D0D3D4">Heart of Cary</font></a></center>
          <center><font face="sans-serif" size="4" color="white">and</font></center>
          <center><font face="sans-serif" size="4" color="white"></font><a href="http://codeforcary.org/parking/"><font class="cfcButton" face="sans-serif" size="4" color="#D0D3D4">Code for Cary</font></a></center>
        </FadeIn>
      </div>
    );
  }
}

export default withStyles(styles)(Welcome);
