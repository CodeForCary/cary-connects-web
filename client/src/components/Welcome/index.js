import React, { Component } from "react";
import { Redirect } from "react-router";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import FadeIn from "react-fade-in";
import { withTheme } from "@material-ui/core/styles";

import ThemePicker from "../../ThemePicker";

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
    const { theme } = this.props;

    const styles = {
      root: {
        textAlign: "center",
        verticleAlign: "middle",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: "100%",
        width: "100%",
        position: "absolute"
      },
      title: {
        paddingTop: "20%"
      },
      bodyText: {
        color: theme.palette.primary.contrastText
      },
      themePicker: {
        marginTop: "5rem"
      }
    };

    if (this.state.redirect) {
      return <Redirect push to='/home' />;
    }

    return (
      <div style={styles.root}>
        <FadeIn transitionDuration={400}>
          <Typography variant='h2' style={styles.title}>
            Welcome to our Cary Downtown Parking site!
          </Typography>
          <br />
          <Typography>
            <Link variant='h6' color='secondary' href='http://codeforcary.org/parking'>
              Click here for more info
            </Link>
          </Typography>
          <br />
          <Typography variant='body1' style={styles.bodyText}>
            The first app for our Cary Connects platform
          </Typography>
          <br />
          <Typography style={styles.bodyText} variant='body2'>
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
          <div style={styles.themePicker}>
            <ThemePicker />
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default withTheme()(Welcome);
