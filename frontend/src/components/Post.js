import React from 'react';
import { connect } from 'react-redux';

import Comments from './Comments';
import { getPost } from '../actions';

const mapStateToProps = state => ({
  postAuthor: state.post.author,
  postTitle: state.post.title,
  postText: state.post.text,
  postDate: state.post.date,
});

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(getPost(id)),
});

class Post extends React.Component {
  constructor() {
    super();

    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <button type="button"
                className="link-button"
                onClick={this.goBack}>
          {'<'} Back to board
        </button>

        <h1 className="mt-4">{this.props.postTitle}</h1>
        <p className="lead">by {this.props.postAuthor}</p>
        <p>Posted on {this.props.postDate}</p>

        <hr />

        <p>{this.props.postText}</p>

        <hr />

        <Comments postId={this.props.match.params.id} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
