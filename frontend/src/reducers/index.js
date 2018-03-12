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
  const { id, timestamp, title, body, author, category, voteScore, deleted } = post;

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
        [post.id] = post,
      }
    case EDIT_POST:
      return {
        ...state,
        [post.id].id = id,
        [post.id].timestamp = timestamp,
        [post.id].title = title,
        [post.id].body = body,
        [post.id].author = author,
        [post.id].category = category,
      }
    case DELETE_POST:
      return {
        ...state,
        [post.id].deleted = deleted,
      }
    case UPVOTE_POST:
      return {
        ...state,
        [post.id].voteScore = voteScore,
      }
    case DOWNVOTE_POST:
      return {
        ...state,
        [post.id].voteScore = voteScore,
      }
    default:
      return state;
  }
}

const comments = (state = {}, action) => {
  const { comment, comments } = action;
  const { id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted } = comment;

  switch (action.type) {
    case CREATE_NEW_COMMENT:
      return {
        ...state,
        [comment.id] = comment
      }
    case EDIT_COMMENT:
      return {
        ...state,
        [comment.id].id = id,
        [comment.id].parentId = parentId,
        [comment.id].timestamp = timestamp,
        [comment.id].body = body,
        [comment.id].author = author,
      }
    case DELETE_COMMENT:
      return {
        ...state,
        [comment.id].deleted = deleted
      }
    case UPVOTE_COMMENT:
      return {
        ...state,
        [comment.id].voteScore = voteScore
      }
    case DOWNVOTE_COMMENT:
      return {
        ...state,
        [comment.id].voteScore = voteScore
      }
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments,
});
