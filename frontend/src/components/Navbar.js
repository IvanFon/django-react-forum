import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  username: state.user.username,
});

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

            {/* Only show login/register when not authenticated */}
            {!this.props.loggedIn &&
              <li className="nav-item">
                <NavLink className="nav-link"
                         activeClassName="active"
                         to='/register'>
                  Register
                </NavLink>
              </li>
            }
            {!this.props.loggedIn &&
              <li className="nav-item">
                <NavLink className="nav-link"
                         activeClassName="active"
                         to='/login'>
                  Login
                </NavLink>
              </li>
            }

            {/* Only show logout when authenticated */}
            {this.props.loggedIn &&
              <li className="nav-item">
                <NavLink className="nav-link"
                         activeClassName="active"
                         to='/logout'>
                  Logout
                </NavLink>
              </li>
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps)(Navbar);
