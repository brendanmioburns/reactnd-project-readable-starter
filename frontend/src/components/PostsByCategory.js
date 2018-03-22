import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { retrieveAllPostsInCategory } from '../utils/api';
import { Link, Route, Switch } from 'react-router-dom';

class PostsByCategory extends Component {

  getPostsInCategory = (category) => {
    retrieveAllPostsInCategory(category)
      .then((posts) => this.props.loadAllPostsInCategory(posts))
  }

  componentDidMount() {
    this.getPostsInCategory(this.props.match.params.category)
  }

  render() {
    const { posts } = this.props
    const { category } = this.props.match.params
    const categoryTitle = `${category[0].toUpperCase()}${category.slice(1)}`

    return (
      <div>
        <h2>{categoryTitle}</h2>
        {console.log('category from PBC', this.props.match.params.category)}
        {console.log('posts from PBC', this.props.posts)}

        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
        <div>
          <Link to="/">Back to Home</Link>
        </div>

      </div>
    )
  }
}

function mapStateToProps ({ categories, posts }) {
  return {
    categories,
    posts,
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
