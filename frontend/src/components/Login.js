import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUser } from '../actions';

const mapStateToProps = state => ({
  ...state.login,
});

const mapDispatchToProps = dispatch => ({
  loginUser: (username, password) => {
    dispatch(loginUser(username, password));
  },
});

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUser(this.state.username, this.state.password);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>

        {/* Login form */}
        {!this.props.success &&
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input className="form-control"
                     id="username"
                     type="text"
                     placeholder="Username"
                     value={this.state.username}
                     onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control"
                     id="password"
                     type="password"
                     placeholder="Password"
                     value={this.state.password}
                     onChange={this.handleChange} />
            </div>
            <button className="btn btn-primary"
                    type="submit"
                    onClick={this.handleSubmit}
                    disabled={this.props.loading}>
              Submit
            </button>
          </form>
        }

        {/* Loading indicator */}
        {this.props.loading &&
          <p className="lead">Logging you in...</p>
        }

        {/* Login errors */}
        {this.props.errors &&
          <p>Errors: {JSON.stringify(this.props.errors)}</p>
        }

        {/* Login success */}
        {this.props.success &&
          <p className="lead">
            You have been logged in.&nbsp;
            <Link to='/boards'>Click here to view the boards.</Link>
          </p>
        }

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
