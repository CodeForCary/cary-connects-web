import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Context } from "./components/Provider";

import KindaBeachy from "./themes/KindaBeachy";
import ItsBlue from "./themes/ItsBlue";
import ReallyGreen from "./themes/ReallyGreen";

//#EB2392
//#76BE4E
//#0190BE
//#d0e2aa

const Theme = props => (
  <Context.Consumer>
    {context => {
      const uiTheme = context.state.theme;

      let selectedTheme;
      switch (uiTheme) {
        case "KindaBeachy":
          selectedTheme = KindaBeachy;
          break;
        case "ItsBlue":
          selectedTheme = ItsBlue;
          break;
        case "ReallyGreen":
          selectedTheme = ReallyGreen;
          break;
        default:
          selectedTheme = KindaBeachy;
      }

      const theme = createMuiTheme(selectedTheme);
      return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
    }}
  </Context.Consumer>
);

export default Theme;
