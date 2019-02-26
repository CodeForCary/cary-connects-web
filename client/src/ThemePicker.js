import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withTheme } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Context } from "./components/Provider";

class ThemePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "mintGreen"
    };
  }

  render() {
    const { theme } = this.props;

    const styles = {
      bodyText: {
        color: theme.palette.primary.contrastText
      }
    };

    return (
      <Context.Consumer>
        {context => (
          <>
            <form autoComplete='off'>
              <FormControl style={styles.formControl}>
                <InputLabel style={styles.bodyText} htmlFor='theme'>
                  Theme
                </InputLabel>
                <Select
                  style={styles.bodyText}
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
export default withTheme()(ThemePicker);
