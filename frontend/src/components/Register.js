import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../actions';

const mapStateToProps = state => ({
  ...state.register,
});

const mapDispatchToProps = dispatch => ({
  registerUser: (username, password) => {
    dispatch(registerUser(username, password));
  },
});

class Register extends React.Component {
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
    this.props.registerUser(this.state.username, this.state.password);
  }

  render() {
    return (
      <div>
        <h1>Register</h1>

        {/* Registration form */}
        {!this.props.success &&
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input className="form-control"
                     id="username"
                     type="text"
                     placeholder="Choose a username"
                     value={this.state.username}
                     onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control"
                     id="password"
                     type="password"
                     placeholder="Choose a password"
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
          <p className="lead">Registering...</p>
        }

        {/* Registration error */}
        {this.props.errors &&
          <p>Errors: {JSON.stringify(this.props.errors)}</p>
        }

        {/* Registration success */}
        {this.props.success &&
          <p className="lead">
            Your account has been created.&nbsp;
            <Link to='/login'>Click here to Login.</Link>
          </p>
        }

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
