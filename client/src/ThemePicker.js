import React, { Component } from "react";
import { withTheme } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Context } from "./components/Provider";

class ThemePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "KindaBeachy"
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
                  <option value='KindaBeachy'>Kinda Beachy</option>
                  <option value='ItsBlue'>It's Blue</option>
                  <option value='ReallyGreen'>Really Green</option>
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
