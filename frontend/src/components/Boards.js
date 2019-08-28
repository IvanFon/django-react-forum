import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBoards, setBoardName } from '../actions';

const mapStateToProps = state => ({
  boards: state.boards,
});

const mapDispatchToProps = dispatch => ({
  getBoards: () => dispatch(getBoards()),
  setBoardName: name => dispatch(setBoardName(name)),
});

class Boards extends React.Component {
  componentDidMount() {
    this.props.getBoards();
  }

  boardSelected(name) {
    this.props.setBoardName(name);
  }

  render() {
    return (
      <div>
        <h1>Boards</h1>
        <ul>
          {this.props.boards.map(board => (
            <li key={board.id}>
              <Link to={`/board/${board.id}`}
                    onClick={() => this.boardSelected(board.name)}>
                {board.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
