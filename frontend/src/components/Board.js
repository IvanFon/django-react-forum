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
        <p><Link to='/'>{'<'} Back to boards</Link></p>
        <h1>{this.props.boardName}</h1>
        <div className="list-group">
          {this.props.posts.map(post => (
            <Link className="list-group-item list-group-item-action"
                  key={post.id}
                  to={`/post/${post.id}`}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{post.title}</h5>
                <small>
                  {new Date(post.date_added).toLocaleDateString()}
                </small>
              </div>
              <p className="mb-1">Author: {post.author}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
