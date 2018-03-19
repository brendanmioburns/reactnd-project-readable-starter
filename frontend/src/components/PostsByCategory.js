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

  componentWillMount() {
    this.getPostsInCategory(this.props.category)
  }

  render() {

    return (
      <div>
        <Link to={`/${this.props.category}/posts`} style={{textDecoration: 'none'}}>

          {Object.keys(this.props)}

          <Link to="/">Back to Home</Link>
        </Link>
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
