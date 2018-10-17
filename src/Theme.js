import React from 'react'
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
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