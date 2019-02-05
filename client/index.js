import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import App from './app'
import CssBaseline from '@material-ui/core/CssBaseline'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles/'

import './socket'

const theme = createMuiTheme({palette: {type: 'dark'}})
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Router history={history}>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
)
