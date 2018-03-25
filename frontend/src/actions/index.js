export const LOAD_ALL_CATEGORIES = 'LOAD_ALL_CATEGORIES';
export const LOAD_ALL_POSTS_IN_CATEGORY = 'LOAD_ALL_POSTS_IN_CATEGORY';
export const LOAD_ALL_POSTS = 'LOAD_ALL_POSTS';
export const LOAD_ALL_COMMENTS_FOR_POST = 'LOAD_ALL_COMMENTS_FOR_POST';
export const LOAD_SINGLE_POST = 'LOAD_SINGLE_POST';
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

export function loadAllCategories (categories) {
  return {
    type: LOAD_ALL_CATEGORIES,
    categories,
  }
}

export function loadAllPostsInCategory (posts) {
  return {
    type: LOAD_ALL_POSTS_IN_CATEGORY,
    posts,
  }
}

export function loadAllPosts (posts) {
  return {
    type: LOAD_ALL_POSTS,
    posts,
  }
}

export function loadAllCommentsForPost (comments) {
  return {
    type: LOAD_ALL_COMMENTS_FOR_POST,
    comments,
  }
}

export function loadSinglePost (post) {
  return {
    type: LOAD_SINGLE_POST,
    post,
  }
}

export function createNewPost ({ post }) {
  return {
    type: CREATE_NEW_POST,
    post,
  }
}

export function editPost ({ post }) {
  return {
    type: EDIT_POST,
    post,
  }
}

export function deletePost ({ post }) {
  return {
    type: DELETE_POST,
    post,
  }
}

export function upvotePost ({ post }) {
  return {
    type: UPVOTE_POST,
    post,
  }
}

export function downvotePost ({ post }) {
  return {
    type: DOWNVOTE_POST,
    post,
  }
}

export function createNewComment ({ comment }) {
  return {
    type: CREATE_NEW_COMMENT,
    comment,
  }
}

export function editComment ({ comment }) {
  return {
    type: EDIT_COMMENT,
    comment,
  }
}

export function deleteComment ({ comment }) {
  return {
    type: DELETE_COMMENT,
    comment,
  }
}

export function upvoteComment ({ comment }) {
  return {
    type: UPVOTE_COMMENT,
    comment,
  }
}
export function downvoteComment ({ comment }) {
  return {
    type: DOWNVOTE_COMMENT,
    comment,
  }
}
