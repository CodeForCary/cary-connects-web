/**
 * Get a list of all pages from PageDirectory and assign their routes
 */
import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import PageDirectory from './pages/PageDirectory'
import NavigationMenu from './components/NavigationMenu'
import Map from './components/Map'

export default function Routes () {
  return (
    <BrowserRouter>
      <>
        <Switch>
          {
            // Loops through all pages in PageDirectory and creates routes to their paths
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

        { /* Persistent Components that should not be remounted/rerendered across page loads */ }
        <NavigationMenu />
        <Map />
      </>
    </BrowserRouter>
  )
}
