import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Board from './components/Board';
import Boards from './components/Boards';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main role="main" className="container">
          <Switch>
            <Route exact path='/' component={Boards} />
            <Route path='/board/:id' component={Board} />
            <Route path='/post/:id' component={Post} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
