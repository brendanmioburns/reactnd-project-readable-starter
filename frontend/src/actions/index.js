export const LOAD_ALL_CATEGORIES = 'LOAD_ALL_CATEGORIES';
export const LOAD_ALL_POSTS = 'LOAD_ALL_POSTS';
export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';
export const CREATE_NEW_COMMENT = 'CREATE_NEW_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export function loadAllCategories ({ categories }) {
  return {
    type: LOAD_ALL_CATEGORIES,
    categories,
  }
}

export function loadAllPosts ({ posts }) {
  return {
    type: LOAD_ALL_POSTS,
    posts,
  }
}

export function createNewPost ({ id, timestamp, title, body, author, category, voteScore, deleted }) {
  return {
    type: CREATE_NEW_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted,
  }
}

export function editPost ({ id, title, body }) {
  return {
    type: EDIT_POST,
    id,
    title,
    body,
  }
}

export function deletePost ({ id, deleted }) {
  return {
    type: DELETE_POST,
    id,
    deleted,
  }
}

export function upvotePost ({ id, voteScore }) {
  return {
    type: UPVOTE_POST,
    id,
    voteScore,
  }
}

export function downvotePost ({ id, voteScore }) {
  return {
    type: DOWNVOTE_POST,
    id,
    voteScore,
  }
}

export function createNewComment ({ id, parentid, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: CREATE_NEW_COMMENT,
    id,
    parentid,
    timestamp,
    body, author,
    voteScore,
    deleted,
    parentDeleted,
  }
}

export function editComment ({ id, body }) {
  return {
    type: EDIT_COMMENT,
    id,
    body,
  }
}

export function deleteComment ({ id, deleted, parentDeleted }) {
  return {
    type: DELETE_COMMENT,
    id,
    deleted,
    parentDeleted,
  }
}

export function upvoteComment ({ id, voteScore }) {
  return {
    type: UPVOTE_COMMENT,
    id,
    deleted,
    parentDeleted,
  }
}
export function deleteComment ({ id, voteScore }) {
  return {
    type: DOWNVOTE_COMMENT,
    id,
    deleted,
    parentDeleted,
  }
}
