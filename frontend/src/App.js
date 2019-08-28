import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Boards from './components/Boards';
import NotFound from './components/NotFound';
import PostList from './components/PostList';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Boards} />
        <Route path='/board/:id' component={PostList} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
