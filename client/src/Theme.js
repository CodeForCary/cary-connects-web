import React from 'react'
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'

//#EB2392
//#76BE4E
//#0190BE

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#76BE4E',
      main: '#0190BE',
      dark: '#EB2392'
    }
  },
  typography: {
    useNextVariants: true
  }
})

const Theme = props => (
  <MuiThemeProvider theme={theme}>
    {props.children}
  </MuiThemeProvider>
)

export default Theme