import React, { Component } from 'react';
import { retrieveAllPosts } from '../utils/api';
import Post from './Post';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import GridList, { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Button from "material-ui/Button";
import Paper from 'material-ui/Paper';
import { Link, Route, Switch } from 'react-router-dom';

class Posts extends Component {

  getPosts = () => {
    retrieveAllPosts()
      .then((posts) => this.props.loadAllPosts(posts))
  }

  componentDidMount() {
    this.getPosts()
  }

  render () {
    const { posts } = this.props

    return (
      <div>
        <Button>
          <Link
            to={`/new`}
          >
          New Post
          </Link>
        </Button>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadAllPosts: (data) => dispatch(Actions.loadAllPosts(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
