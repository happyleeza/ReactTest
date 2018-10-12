import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Main from './Main'
import People from './People'

const styles = {
    root: {
        // display: 'grid'
    },

};

class App extends Component {
  render() {
    return (
        <div>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/People" component={People} />
        </Switch>
      </div>
    );
  }
}

App.PropTypes = {
    styles: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);
