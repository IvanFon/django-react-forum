import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Boards from './components/Boards';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Boards} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
