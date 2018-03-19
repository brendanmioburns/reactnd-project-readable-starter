import { combineReducers } from 'redux';

import {
  LOAD_ALL_CATEGORIES,
  LOAD_ALL_POSTS_IN_CATEGORY,
  LOAD_ALL_POSTS,
  LOAD_ALL_COMMENTS_FOR_POST,
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

  switch (action.type) {
    case LOAD_ALL_POSTS:
      return posts
    case LOAD_ALL_POSTS_IN_CATEGORY:
      return posts
    case CREATE_NEW_POST:
      return {
        ...state,
        [post.id]: post,
      }
    case EDIT_POST:
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          title: post.title,
          body: post.body,
          author: post.author,
          category: post.category,
        }
      }
    case DELETE_POST:
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          deleted: post.deleted,
        }
      }
    case UPVOTE_POST:
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          voteScore: post.voteScore,
        }
      }
    case DOWNVOTE_POST:
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          voteScore: post.voteScore,
        }
      }
    default:
      return state;
  }
}

const comments = (state = {}, action) => {
  const { comment, comments } = action;
  // const { id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted } = comment;

  switch (action.type) {
    case LOAD_ALL_COMMENTS_FOR_POST:
      return comments
    case CREATE_NEW_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      }
    case EDIT_COMMENT:
      return {
        ...state,
        [comment.id]: {
          ...state[comment.id],
          body: comment.body,
          author: comment.author,
        }
      }
    case DELETE_COMMENT:
      return {
        ...state,
        [comment.id]: {
          ...state[comment.id],
          deleted: comment.deleted,
        }
      }
    case UPVOTE_COMMENT:
      return {
        ...state,
        [comment.id]: {
          ...state[comment.id],
          voteScore: comment.voteScore,
        }
      }
    case DOWNVOTE_COMMENT:
      return {
        ...state,
        [comment.id]: {
          ...state[comment.id],
          voteScore: comment.voteScore,
        }
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
