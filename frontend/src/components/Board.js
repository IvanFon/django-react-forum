import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBoardPosts } from '../actions';

const mapStateToProps = state => ({
  boardName: state.board.name,
  posts: state.board.posts,
});

const mapDispatchToProps = dispatch => ({
  getBoardPosts: id => dispatch(getBoardPosts(id)),
});

class Board extends React.Component {
  componentDidMount() {
    this.props.getBoardPosts(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <p><Link to='/'>Back to board list</Link></p>
        <h1>{this.props.boardName}</h1>
        <ul>
          {this.props.posts.map(post => (
            <li key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
