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
      <div>
        <h3>Comments</h3>
        <div className="list-group">
          {this.props.comments.map(comment => (
            <div className="list-group-item"
                 key={comment.id}>
              <h5 className="mb-1"><i>{comment.author}</i> says:</h5>
              <p>{comment.text}</p>
              <small>
                {new Date(comment.date_added).toLocaleString(undefined, {
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit',
                  year: '2-digit',
                  month: 'numeric',
                  day: 'numeric',
                })}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
