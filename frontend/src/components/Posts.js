import React, { Component } from 'react';
import { retrieveAllPosts, retrieveCommentsFromSinglePost } from '../utils/api';
import PostDetail from './PostDetail';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import GridList, { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

const style = {
  height: 360,
  width: 360,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Posts extends Component {

  getPosts = () => {
    retrieveAllPosts()
      .then((posts) => this.props.loadAllPosts(posts))
  }

  getComments = (post) => {
    retrieveCommentsFromSinglePost(post)
      .then((comments) => this.props.loadAllCommentsForPost(comments))
  }

  componentDidMount() {
    this.getPosts()
    console.log(this.props.posts)
  }

  render () {
    return (
      <div>
        {Object.keys(this.props.posts).map((postKey) => {
          <li>{postKey}</li>
        })}
      </div>
    )
  }
}

function mapStateToProps ({ posts, comments }) {
  return {
    posts,
    comments,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadAllPosts: (data) => dispatch(Actions.loadAllPosts(data)),
    loadAllCommentsForPost: (data) => dispatch(Actions.loadAllCommentsForPost(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
