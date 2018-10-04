import React from 'react'
import ReactDOM from 'react-dom'
import 'leaflet/dist/leaflet.css'
import './components/Map/styles.css'
import Routes from './routes'
import registerServiceWorker from './utilities/registerServiceWorker'

ReactDOM.render(<Routes />, document.getElementById('root'))
registerServiceWorker()
