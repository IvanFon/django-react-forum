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
        <div className="list-group">
          {this.props.boards.map(board => (
            <Link className="list-group-item list-group-item-action"
                  key={board.id}
                  to={`/board/${board.id}`}
                  onClick={() => this.boardSelected(board.name)}>
              <h5 className="mb-1">{board.name}</h5>
              <p className="mb-1">{board.description}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
