import React from 'react';
import { connect } from 'react-redux';

import CommentForm from './CommentForm';
import { getComments } from '../actions';

const mapStateToProps = state => ({
  comments: state.comments,
  loggedIn: state.user.loggedIn,
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
      <div>
        <h3>Comments</h3>

        {this.props.loggedIn &&
          <>
            <CommentForm postId={this.props.postId} />
            <hr />
          </>
        }

        <div className="list-group">
          {this.props.comments.map(comment => (
            <div className="list-group-item"
                 key={comment.id}>
              <h5 className="mb-1"><i>{comment.author}</i> says:</h5>
              <p>{comment.text}</p>
              <small>{comment.date}</small>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
