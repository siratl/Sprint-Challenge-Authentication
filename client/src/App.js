import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link, withRouter } from 'react-router-dom';

import Login from './Login/Login';
import Jokes from './Jokes/Jokes';
import Register from './Register/Register';

class App extends Component {
  logout = () => {
    localStorage.removeItem('jwt');

    this.props.history.push('/login');
  };

  render() {
    return (
      <>
        <header>
          <nav className="navBar">
            {localStorage.getItem('jwt') ? (
              <Link to="/login">
                <span onClick={this.logout}>Logout</span>
              </Link>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
            &nbsp;|&nbsp;
            <NavLink to="/users">Jokes</NavLink>
            {localStorage.getItem('jwt') ? null : (
              <>
                &nbsp;|&nbsp;<NavLink to="/register">Register</NavLink>
              </>
            )}
          </nav>
        </header>
        <main>
          <Route path="/login" component={Login} />
          <Route path="/jokes" component={Jokes} />
          <Route path="/register" component={Register} />
        </main>
      </>
    );
  }
}

export default withRouter(App);
