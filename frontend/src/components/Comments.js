import React from 'react';
import { connect } from 'react-redux';

import { getComments } from '../actions';

const mapStateToProps = state => ({
  comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
  getComments: boardId => dispatch(getComments(boardId)),
});

class Comments extends React.Component {
  componentDidMount() {
    this.props.getComments(this.props.postId);
  }

  render() {
    return (
      <ul>
        {this.props.comments.map(comment => (
          <li key={comment.id}>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
