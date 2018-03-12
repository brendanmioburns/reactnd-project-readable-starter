import { combineReducers } from 'redux';

import {
  LOAD_ALL_CATEGORIES,
  LOAD_ALL_POSTS,
  CREATE_NEW_POST,
  EDIT_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  CREATE_NEW_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
} from '../actions';

const categories = (state = [], action) => {
  const { categories } = action;

  switch (action.type) {
    case LOAD_ALL_CATEGORIES:
      return categories
    default:
      return state;
  }
}

const posts = (state = {}, action) => {
  const { posts, post } = action;
  // const { id, timestamp, title, body, author, category, voteScore, deleted } = post;

  switch (action.type) {
    case LOAD_ALL_POSTS:
      return posts
        ? posts.reduce((obj, p) => {
          obj[p.id] = p
          return obj
        }, {})
        : state
    case CREATE_NEW_POST:
      return {
        ...state,
        [post.id]: post,
      }
    case EDIT_POST:
      return posts
        ? posts.filter(id => {
          posts[post.id].id = post.id
          posts[post.id].timestamp = post.timestamp
          posts[post.id].title = post.title
          posts[post.id].body = post.body
          posts[post.id].author = post.author
          posts[post.id].category = post.category
          return posts
        })
        : state
    case DELETE_POST:
      return posts
        ? posts.filter(id => {
          posts[post.id].deleted = post.deleted
          return posts
        })
        : state
    case UPVOTE_POST:
      return posts
        ? posts.filter(id => {
          posts[post.id].voteScore = post.voteScore
          return posts
        })
        : state
    case DOWNVOTE_POST:
      return posts
        ? posts.filter(id => {
          posts[post.id].voteScore = post.voteScore
          return posts
        })
        : state
    default:
      return state;
  }
}

const comments = (state = {}, action) => {
  const { comment, comments } = action;
  // const { id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted } = comment;

  switch (action.type) {
    case CREATE_NEW_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      }
    case EDIT_COMMENT:
      return comments
        ? comments.filter(id => {
          comments[comment.id].id = comment.id
          comments[comment.id].timestamp = comment.timestamp
          comments[comment.id].title = comment.title
          comments[comment.id].body = comment.body
          comments[comment.id].author = comment.author
          comments[comment.id].category = comment.category
          return comments
        })
        : state
    case DELETE_COMMENT:
      return comments
        ? comments.filter(id => {
          comments[comment.id].deleted = comment.deleted
          return comments
        })
        : state
    case UPVOTE_COMMENT:
      return comments
        ? comments.filter(id => {
          comments[comment.id].voteScore = comment.voteScore
          return comments
        })
        : state
    case DOWNVOTE_COMMENT:
      return comments
        ? comments.filter(id => {
          comments[comment.id].voteScore = comment.voteScore
          return comments
        })
        : state
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments,
});
