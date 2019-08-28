import React from 'react';
import { connect } from 'react-redux';

import { getBoards } from '../actions';

const mapStateToProps = state => ({
  boards: state.boards,
});

const mapDispatchToProps = dispatch => ({
  getBoards: () => dispatch(getBoards()),
});

class Boards extends React.Component {
  componentDidMount() {
    this.props.getBoards();
  }

  render() {
    return (
      <div>
        <h1>Boards</h1>
        <ul>
          {this.props.boards.map(board => (
            <li key={board.id}>
              {board.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
