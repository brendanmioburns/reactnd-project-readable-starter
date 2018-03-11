import uuid from 'uuid';

const api = 'http://localhost:3001'

let token = localStorage.token;

if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(2, 9)
}

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token,
}
// GET /categories
//   USAGE:
//     Get all of the categories available for the app. List is found in categories.js.
export const retrieveAllCategories = () => {
  return fetch(`${api}/categories`, { headers })
  .then(res => res.json())
  .then(data => data.categories)
}

// GET /:category/posts
//   USAGE:
//     Get all of the posts for a particular category
export const retrieveAllPostsInCategory = (category) => {
  return fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)
}

// GET /posts
//   USAGE:
//     Get all of the posts. Useful for the main page when no category is selected.
export const retrieveAllPosts = () => {
  return fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)
}

// POST /posts
//   USAGE:
//     Add a new post
//
//   PARAMS:
//     id - UUID should be fine, but any unique id will work
//     timestamp - timestamp in whatever format you like, you can use Date.now() if you like
//     title - String
//     body - String
//     author - String
//     category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
export const createNewPost = (newPost) => {
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      ...newPost,
      id: uuid(),
      timestamp: Date.now(),
    })
  })
  .then(res => res.json())
  .then(data => data)
}

// GET /posts/:id
//   USAGE:
//     Get the details of a single post
export const retrieveSinglePost = (post) => {
  return fetch(`${api}/posts/${post.id}`, { headers })
    .then(res => res.json())
    .then(data => data)
}

// POST /posts/:id
//   USAGE:
//     Used for voting on a post
//   PARAMS:
//     option - String: Either "upVote" or "downVote"
export const voteOnPost = (post, option) => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      option
    })
  })
  .then(res => res.json())
  .then(data => data)
}

// PUT /posts/:id
//   USAGE:
//     Edit the details of an existing post
//   PARAMS:
//     title - String
//     body - String
export const editPostDetails = (post) => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      title: post.title,
      body: post.body,
      timestamp: Date.now(),
    })
  })
  .then(res => res.json())
  .then(data => data)
}

// DELETE /posts/:id
//   USAGE:
//     Sets the deleted flag for a post to 'true'.
//     Sets the parentDeleted flag for all child comments to 'true'.
export const deletePost = (post) => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'DELETE',
    headers,
  })
  .then(res => res.json())
  .then(data => data)
}

// GET /posts/:id/comments
//   USAGE:
//     Get all the comments for a single post
export const retrieveCommentsFromSinglePost = (post) => {
  return fetch(`${api}/posts/${post.id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)
}

// POST /comments
//   USAGE:
//     Add a comment to a post
//
//   PARAMS:
//     id: Any unique ID. As with posts, UUID is probably the best here.
//     timestamp: timestamp. Get this however you want.
//     body: String
//     author: String
//     parentId: Should match a post id in the database.
//
export const createNewComment = (newComment) => {
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      ...newComment,
      id: uuid(),
      timestamp: Date.now(),
    })
  })
  .then(res => res.json())
  .then(data => data)
}

// GET /comments/:id
//   USAGE:
//     Get the details for a single comment
//
export const retrieveSingleComment = (comment) => {
  return fetch(`${api}/comments/${comment.id}`, { headers })
    .then(res => res.json())
    .then(data => data)
}

// POST /comments/:id
//   USAGE:
//     Used for voting on a comment.
//   PARAMS:
//     option - String: Either "upVote" or "downVote"
export const voteOnComment = (comment, option) => {
  return fetch(`${api}/comments/${comment.id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      option
    })
  })
  .then(res => res.json())
  .then(data => data)
}

// PUT /comments/:id
//   USAGE:
//     Edit the details of an existing comment
//
//   PARAMS:
//     timestamp: timestamp. Get this however you want.
//     body: String
export const editCommentDetails = (comment) => {
  return fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      ...comment,
      body: comment.body,
      timestamp: Date.now(),
    })
  })
  .then(res => res.json())
  .then(data => data)
}

// DELETE /comments/:id
//   USAGE:
//     Sets a comment's deleted flag to 'true'
export const deleteComment = (comment) => {
  return fetch(`${api}/comments/${comment.id}`, {
    method: 'DELETE',
    headers,
  })
  .then(res => res.json())
  .then(data => data)
}
