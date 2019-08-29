import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../actions';

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});

class Logout extends React.Component {
  componentDidMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        {this.props.loggedIn &&
          <p className="lead">Logging you out.</p>
        }

        {!this.props.loggedIn &&
          <p className="lead">
            You have been logged out.&nbsp;
            <Link to='/boards'>Click here to return to the boards.</Link>
          </p>
        }
    </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
