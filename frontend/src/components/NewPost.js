import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  clearNewPost,
  createPost,
  getBoards
} from '../actions';

const mapStateToProps = state => ({
  boards: state.boards,
  ...state.newPost,
});

const mapDispatchToProps = dispatch => ({
  clearNewPost: () => dispatch(clearNewPost()),
  createPost: (data) => dispatch(createPost(data)),
  getBoards: () => dispatch(getBoards()),
});

class NewPost extends React.Component {
  constructor() {
    super();

    this.state = {
      board: '-1',
      title: '',
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearNewPost();
    this.props.getBoards();
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost({ ...this.state });
  }

  render() {
    return (
      <div>
        <h1>New Post</h1>

        {/* Post form */}
        {!this.props.success &&
          <form>
            <div className="form-group">
              <label htmlFor="board">Board</label>
              <select className="form-control"
                      id="board"
                      value={this.state.board}
                      onChange={this.handleChange}>
                      <option key="-1" value="-1">---</option>
                {this.props.boards.map(board => (
                  <option key={board.id} value={board.id}>{board.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input className="form-control"
                     id="title"
                     type="text"
                     placeholder="Title"
                     value={this.state.title}
                     onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="text">Post text</label>
              <textarea className="form-control"
                        id="text"
                        placeholder="Post Text"
                        value={this.state.text}
                        onChange={this.handleChange}>
              </textarea>
            </div>
            <button className="btn btn-primary"
                    type="submit"
                    onClick={this.handleSubmit}
                    disabled={this.props.loading}>
              Submit
            </button>
          </form>
        }

        {/* Loading indicator */}
        {this.props.loading &&
          <p className="lead">Creating post...</p>
        }

        {/* Errors */}
        {this.props.errors &&
          <p>Errors: {JSON.stringify(this.props.errors)}</p>
        }

        {/* Success */}
        {this.props.success &&
          <p className="lead">
            Post created,&nbsp;
            <Link to={`/post/${this.props.id}`}>
              click here to view it.
            </Link>
          </p>
        }

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
