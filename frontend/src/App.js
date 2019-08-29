import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Board from './components/Board';
import Boards from './components/Boards';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Post from './components/Post';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main role="main" className="container">
          <Switch>
            <Redirect exact path='/' to='/boards' />
            <Route exact path='/boards' component={Boards} />
            <Route path='/boards/:id' component={Board} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Logout} />
            <Route path='/post/:id' component={Post} />
            <Route path='/register' component={Register} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
