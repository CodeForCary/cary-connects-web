import React, { Component } from "react";
import { Redirect } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import FadeIn from "react-fade-in";
import { compose } from "recompose";
import { withTheme } from "@material-ui/core/styles";

import ThemePicker from "../../ThemePicker";

const styles = theme => ({
  root: {
    textAlign: "center",
    verticleAlign: "middle",
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    width: "100%",
    position: "absolute"
  },
  title: {
    paddingTop: "20%"
  },
  bodyText: {
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

  _handleClick = event => {
    if (!event.target.matches("a") && !event.target.matches("select")) {
      this.setState({ redirect: true });
    }
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
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
        <FadeIn transitionDuration={400}>
          <Typography variant='h2' className={classes.title}>
            Welcome to our Cary Downtown Parking site!
          </Typography>
          <br />
          <Link color='secondary' variant='h6' href='http://codeforcary.org/parking'>
            Click here for more info
          </Link>
          <br />
          <Typography className={classes.bodyText} variant='body1'>
            The first app for our Cary Connects platform
          </Typography>
          <br />
          <Typography className={classes.bodyText} variant='body2'>
            Created by Volunteers with
            <br />
            <Link color='secondary' variant='body2' href='https://www.heartofcary.org/caryapp.html'>
              Heart of Cary
            </Link>{" "}
            and{" "}
            <Link color='secondary' variant='body2' href='http://codeforcary.org/parking/'>
              Code for Cary
            </Link>
          </Typography>

          <ThemePicker />
        </FadeIn>
      </div>
    );
  }
}

export default compose(
  withTheme(),
  withStyles(styles)
)(Welcome);
