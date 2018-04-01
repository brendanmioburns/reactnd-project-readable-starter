import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import * as Actions from '../actions';
import { retrieveAllPostsInCategory } from '../utils/api';
import { capitalize } from '../utils/helpers';
import { Link, Route, Switch } from 'react-router-dom';

class PostsByCategory extends Component {

  getPostsInCategory = (category) => {
    retrieveAllPostsInCategory(category)
      .then((posts) => this.props.loadAllPostsInCategory(posts))
  }

  componentDidMount() {
    const { category } = this.props.match.params

    this.getPostsInCategory(category)
  }

  render() {
    const { posts } = this.props
    const { category } = this.props.match.params

    return (
      <div>
        <h2>{capitalize(category)}</h2>
        {posts.map((post, index) => (
          <div>
            <Post post={post} key={index}/>
            <br/>
          </div>
        ))}
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadAllPostsInCategory: (data) => dispatch(Actions.loadAllPostsInCategory(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsByCategory);
