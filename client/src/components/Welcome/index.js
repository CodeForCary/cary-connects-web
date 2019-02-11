import React, { Component } from "react";
import { Redirect } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import FadeIn from "react-fade-in";

const styles = theme => ({
  root: {
    textAlign: "center",
    verticleAlign: "middle",
    backgroundColor: "#d0e2aa",
    height: "100%",
    width: "100%",
    position: "absolute"
  },
  title: {
    paddingTop: "10%"
  }
});

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  _handleClick = event => {
    if (!event.target.matches("a")) {
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
      <div className={classes.root}>
        <FadeIn transitionDuration={5000}>
          <Typography variant='h2' className={classes.title}>
            Welcome to our Cary Downtown Parking site!
          </Typography>
          <br />
          <Link variant='h6' href='http://codeforcary.org/parking'>
            Click here for more info
          </Link>
          <br />
          <Typography variant='body1'>The first app for our Cary Connects platform</Typography>
          <br />
          <Typography variant='body2'>
            Created by Volunteers with
            <br />
            <Link variant='body2' href='https://www.heartofcary.org/caryapp.html'>
              Heart of Cary
            </Link>{" "}
            and{" "}
            <Link variant='body2' href='http://codeforcary.org/parking/'>
              Code for Cary
            </Link>
          </Typography>
        </FadeIn>
      </div>
    );
  }
}

export default withStyles(styles)(Welcome);
