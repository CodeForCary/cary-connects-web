import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

//#EB2392
//#76BE4E
//#0190BE

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e2ffbf",
      main: "#11c4ab",
      dark: "#EB2392"
    },
    secondary: {
      main: '#00ffdd'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    h2: {
      color: "white"
    }
  }
});

const Theme = props => <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;

export default Theme;
