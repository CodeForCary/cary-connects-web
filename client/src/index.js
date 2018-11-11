import React from 'react'
import ReactDOM from 'react-dom'
import 'leaflet/dist/leaflet.css'
import './components/Map/styles.css'
import Theme from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import Provider from './components/Provider';

ReactDOM.render(
  <Provider>
    <Theme>
      <CssBaseline>
        <App />
      </CssBaseline>
    </Theme>
  </Provider>
  , document.getElementById('root'))
