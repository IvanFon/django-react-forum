import React from 'react';

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
      </nav>
    );
  }
}

export default Navbar;
