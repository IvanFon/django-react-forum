import React from 'react';
import { connect } from 'react-redux';

import {
  clearNewComment,
  createComment,
  getComments,
} from '../actions';

const mapStateToProps = state => ({
  ...state.newComment,
});

const mapDispatchToProps = dispatch => ({
  clearNewComment: () => dispatch(clearNewComment()),
  createComment: (data) => dispatch(createComment(data)),
  getComments: (data) => dispatch(getComments()),
});

class CommentForm extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearNewComment();
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({
      ...this.state,
      postId: this.props.postId,
    });
  }

  render() {
    return (
      <div>
        <h4>Add a comment</h4>

        {/* Comment form */}
        <form>
          <div className="form-group">
            <label htmlFor="text">Comment text</label>
            <input className="form-control"
                    id="text"
                    type="text"
                    placeholder="Comment text"
                    value={this.state.text}
                    onChange={this.handleChange} />
          </div>
          <button className="btn btn-primary"
                  type="submit"
                  onClick={this.handleSubmit}>
            Submit
          </button>
        </form>

        {/* Loading indicator */}
        {this.props.loading &&
          <p className="lead">Creating comment...</p>
        }

        {/* Errors */}
        {this.props.errors &&
          <p>Errors: {JSON.stringify(this.props.errors)}</p>
        }

        {/* Success */}
        {this.props.success &&
          <p className="lead">Comment added.</p>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
