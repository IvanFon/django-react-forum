import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../actions';

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  getPosts: id => dispatch(getPosts(id)),
});

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>Board</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
