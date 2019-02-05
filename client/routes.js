import React, {Component} from 'react'

import {withRouter, Route, Switch} from 'react-router-dom'

import PropTypes from 'prop-types'

import {Home, ClauseDefinition, Translation, Claws} from './components'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Def" component={ClauseDefinition} />
        <Route exact path="/Claws" component={Claws} />
        <Route exact path="/Translation" component={Translation} />
      </Switch>
    )
  }
}
