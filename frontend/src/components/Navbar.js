import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className={`navbar navbar-expand-md navbar-dark bg-dark
                      fixed-top`}>
        <a className="navbar-brand" href="/">Example Forum</a>
        <button className="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarsMain"
                aria-controls="navbarsMain" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse"
             id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link"
                    activeClassName="active"
                    to='/boards'>
                  Boards
                </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link"
                       activeClassName="active"
                       to='/register'>
                Register
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link"
                       activeClassName="active"
                       to='/login'>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
