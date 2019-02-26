import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import FadeIn from "react-fade-in";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Context } from "./components/Provider";

const styles = theme => ({
  bodyText: {
    color: "white"
  }
});

class ThemePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "mintGreen"
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Context.Consumer>
        {context => (
          <>
            <Typography className={classes.bodyText} variant='body1'>
              Choose Theme: <br />
            </Typography>
            <form className={classes.root} autoComplete='off'>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor='theme'>Theme</InputLabel>
                <Select
                  native
                  value={context.state.theme}
                  onChange={context.handleThemeChange}
                  inputProps={{
                    name: "theme",
                    id: "theme"
                  }}
                >
                  <option value='mintGreen'>Mint Green</option>
                  <option value='blue'>Blue</option>
                  <option value='brightGreen'>Bright Green</option>
                </Select>
              </FormControl>
            </form>
          </>
        )}
      </Context.Consumer>
    );
  }
}
export default compose(
  withTheme(),
  withStyles(styles)
)(ThemePicker);
