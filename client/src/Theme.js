import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Context } from "./components/Provider";
//#EB2392
//#76BE4E
//#0190BE
//#d0e2aa

const Theme = props => (
  <Context.Consumer>
    {context => {
      const uiTheme = context.state.theme;

      const mintGreen = {
        palette: {
          primary: {
            main: "#11c4ab",
            contrastText: "#fff"
          },
          secondary: {
            main: "#00ffdd"
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
      };

      const blue = {
        palette: {
          primary: {
            light: "#76BE4E",
            main: "#0190BE",
            dark: "#EB2392"
          },
          secondary: {
            main: "#00ffdd"
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
      };

      const brightGreen = {
        palette: {
          primary: {
            light: "#76BE4E",
            main: "#d0e2aa",
            dark: "#EB2392",
            contrastText: "#333"
          },
          secondary: {
            main: "#00695c"
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
            color: "#333"
          }
        }
      };

      let selectedTheme;
      switch (uiTheme) {
        case "mintGreen":
          selectedTheme = mintGreen;
          break;
        case "blue":
          selectedTheme = blue;
          break;
        case "brightGreen":
          selectedTheme = brightGreen;
          break;
        default:
          selectedTheme = mintGreen;
      }

      const theme = createMuiTheme(selectedTheme);
      return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
    }}
  </Context.Consumer>
);

export default Theme;
