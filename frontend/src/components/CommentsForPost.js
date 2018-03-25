import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import * as Actions from '../actions';
import { retrieveCommentsFromSinglePost } from '../utils/api';
import { Link, Route, Switch } from 'react-router-dom';

class CommentsForPost extends Component {

  render() {
    const { comments } = this.props
    const { selectedPost } = this.props

    return (
      <div>
        {comments.length > 0 && comments.map((comment) => (
          <Comment comment={comment}/>
        ))}
      </div>
    )
  }
}

export default CommentsForPost;
