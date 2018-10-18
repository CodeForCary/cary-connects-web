/**
 * Get a list of all pages from PageDirectory and assign their routes
 */
import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import PageDirectory from './pages/PageDirectory'

import Theme from './Theme.js'

export default function Routes () {
  return (
    <Theme>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          {
            Object.keys(PageDirectory).map(key => {
              return (
                <Route
                  key={key}
                  exact
                  path={PageDirectory[key].path}
                  component={PageDirectory[key].component}
                />
              )
            })
          }
          <Redirect to={PageDirectory.WELCOME_PAGE.path} />
        </Switch>
      </BrowserRouter>
    </Theme>
  )
}
